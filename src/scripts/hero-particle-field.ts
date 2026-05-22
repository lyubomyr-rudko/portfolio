import {
  Delaunay,
  curveBasis,
  interpolateRgbBasis,
  line,
  randomUniform,
  range,
  scaleSequential,
  timer,
  type Timer,
} from "d3";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  tone: number;
  drift: number;
  energy: number;
};

type PointerState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  active: boolean;
};

type HeroWindow = Window & {
  __heroParticleFieldCleanup?: () => void;
};

const TAU = Math.PI * 2;
const PARTICLE_DENSITY = 8600;
const MIN_PARTICLES = 80;
const MAX_PARTICLES = 190;
const LINK_DISTANCE = 122;
const POINTER_RADIUS = 250;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const colorScale = scaleSequential<string>()
  .domain([0, 1])
  .interpolator(
    interpolateRgbBasis(["#111111", "#2f7d58", "#3867d6", "#b87333"]),
  );

const makeParticles = (width: number, height: number): Particle[] => {
  const count = Math.round(
    clamp((width * height) / PARTICLE_DENSITY, MIN_PARTICLES, MAX_PARTICLES),
  );
  const randomX = randomUniform(0, width);
  const randomY = randomUniform(0, height);
  const randomRadius = randomUniform(1.1, 2.9);
  const randomPhase = randomUniform(0, TAU);
  const randomTone = randomUniform(0, 1);
  const randomDrift = randomUniform(0.55, 1.45);

  return range(count).map(() => {
    const x = randomX();
    const y = randomY();

    return {
      x,
      y,
      baseX: x,
      baseY: y,
      vx: 0,
      vy: 0,
      radius: randomRadius(),
      phase: randomPhase(),
      tone: randomTone(),
      drift: randomDrift(),
      energy: 0,
    };
  });
};

const drawWaveBands = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  elapsed: number,
  pointer: PointerState,
) => {
  const waveLine = line<[number, number]>()
    .x((point) => point[0])
    .y((point) => point[1])
    .curve(curveBasis)
    .context(context);

  const rows = [0.2, 0.34, 0.5, 0.68, 0.82];
  const phase = elapsed * 0.0011;

  rows.forEach((row, index) => {
    const points = range(-96, width + 128, 76).map((x) => {
      const pointerPull =
        Math.max(0, 1 - Math.abs(x - pointer.x) / (width * 0.72)) *
        Math.sin(phase * 2 + index) *
        18;
      const y =
        height * row +
        Math.sin(x * 0.009 + phase + index * 1.7) * (16 + index * 2.5) +
        pointerPull;

      return [x, y] as [number, number];
    });

    context.beginPath();
    waveLine(points);
    context.lineWidth = index === 2 ? 1.4 : 1;
    context.strokeStyle = `rgba(47, 125, 88, ${0.075 - index * 0.007})`;
    context.stroke();
  });
};

const drawPointerWaves = (
  context: CanvasRenderingContext2D,
  elapsed: number,
  pointer: PointerState,
) => {
  if (!pointer.active) {
    return;
  }

  range(4).forEach((index) => {
    const radius = ((elapsed * 0.055 + index * 76) % 300) + 18;
    const alpha = Math.max(0, 1 - radius / 318) * 0.18;

    context.beginPath();
    context.arc(pointer.x, pointer.y, radius, 0, TAU);
    context.lineWidth = 1.4;
    context.strokeStyle = `rgba(56, 103, 214, ${alpha})`;
    context.stroke();
  });
};

const drawMesh = (
  context: CanvasRenderingContext2D,
  particles: Particle[],
) => {
  const delaunay = Delaunay.from(
    particles,
    (particle) => particle.x,
    (particle) => particle.y,
  );

  particles.forEach((particle, index) => {
    for (const neighborIndex of delaunay.neighbors(index)) {
      if (neighborIndex <= index) {
        continue;
      }

      const neighbor = particles[neighborIndex];
      const dx = neighbor.x - particle.x;
      const dy = neighbor.y - particle.y;
      const distance = Math.hypot(dx, dy);

      if (distance > LINK_DISTANCE) {
        continue;
      }

      const alpha =
        (1 - distance / LINK_DISTANCE) *
        (0.08 + Math.max(particle.energy, neighbor.energy) * 0.18);

      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(neighbor.x, neighbor.y);
      context.lineWidth = 1;
      context.strokeStyle = `rgba(10, 10, 10, ${alpha})`;
      context.stroke();
    }
  });
};

const drawParticles = (
  context: CanvasRenderingContext2D,
  particles: Particle[],
) => {
  particles.forEach((particle) => {
    context.beginPath();
    context.arc(
      particle.x,
      particle.y,
      particle.radius + particle.energy * 2.4,
      0,
      TAU,
    );
    context.fillStyle = colorScale(particle.tone);
    context.globalAlpha = 0.32 + particle.energy * 0.5;
    context.fill();
  });

  context.globalAlpha = 1;
};

const tickParticles = (
  particles: Particle[],
  pointer: PointerState,
  width: number,
  height: number,
  elapsed: number,
) => {
  const t = elapsed * 0.001;

  pointer.x += (pointer.targetX - pointer.x) * 0.095;
  pointer.y += (pointer.targetY - pointer.y) * 0.095;

  particles.forEach((particle) => {
    const driftX =
      particle.baseX +
      Math.sin(t * particle.drift + particle.phase) * (18 + particle.tone * 9);
    const driftY =
      particle.baseY +
      Math.cos(t * particle.drift * 0.82 + particle.phase) *
        (14 + particle.tone * 7);
    const dx = particle.x - pointer.x;
    const dy = particle.y - pointer.y;
    const distance = Math.max(1, Math.hypot(dx, dy));
    const influence = Math.max(0, 1 - distance / POINTER_RADIUS);
    const wave = Math.sin(distance * 0.045 - elapsed * 0.005 + particle.phase);
    const push = influence * (pointer.active ? 0.72 : 0.26);
    const angle = Math.atan2(dy, dx);

    particle.energy += (influence - particle.energy) * 0.12;
    particle.vx += (driftX - particle.x) * 0.0045;
    particle.vy += (driftY - particle.y) * 0.0045;
    particle.vx += Math.cos(angle + wave * 0.7) * push;
    particle.vy += Math.sin(angle + wave * 0.7) * push;
    particle.vx += Math.sin(t + particle.phase) * 0.018;
    particle.vy += Math.cos(t * 0.9 + particle.phase) * 0.018;
    particle.vx *= 0.91;
    particle.vy *= 0.91;
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -24 || particle.x > width + 24) {
      particle.x = clamp(particle.x, -24, width + 24);
      particle.vx *= -0.45;
    }

    if (particle.y < -24 || particle.y > height + 24) {
      particle.y = clamp(particle.y, -24, height + 24);
      particle.vy *= -0.45;
    }
  });
};

export const initHeroParticleField = () => {
  const hostWindow = window as HeroWindow;
  hostWindow.__heroParticleFieldCleanup?.();

  const section = document.querySelector<HTMLElement>("[data-hero-field]");
  const canvas = document.querySelector<HTMLCanvasElement>(
    "[data-hero-field-canvas]",
  );
  const context = canvas?.getContext("2d");

  if (!section || !canvas || !context) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer: PointerState = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
  };
  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  let animationTimer: Timer | undefined;
  let frame = 0;

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    pointer.x = width * 0.68;
    pointer.y = height * 0.42;
    pointer.targetX = pointer.x;
    pointer.targetY = pointer.y;
    particles = makeParticles(width, height);
  };

  const render = (elapsed: number) => {
    context.clearRect(0, 0, width, height);
    drawWaveBands(context, width, height, elapsed, pointer);
    drawPointerWaves(context, elapsed, pointer);
    drawMesh(context, particles);
    drawParticles(context, particles);
  };

  const animate = (elapsed: number) => {
    if (document.visibilityState === "hidden") {
      return;
    }

    frame += 1;
    tickParticles(particles, pointer, width, height, elapsed);
    render(elapsed);

    if (frame % 180 === 0 && !pointer.active) {
      pointer.targetX = width * (0.56 + Math.sin(elapsed * 0.00035) * 0.18);
      pointer.targetY = height * (0.38 + Math.cos(elapsed * 0.0003) * 0.14);
    }
  };

  const start = () => {
    animationTimer?.stop();
    resize();

    if (reducedMotion.matches) {
      tickParticles(particles, pointer, width, height, 0);
      render(0);
      return;
    }

    animationTimer = timer(animate);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const bounds = canvas.getBoundingClientRect();

    pointer.targetX = event.clientX - bounds.left;
    pointer.targetY = event.clientY - bounds.top;
    pointer.active = true;
  };

  const handlePointerLeave = () => {
    pointer.active = false;
    pointer.targetX = width * 0.68;
    pointer.targetY = height * 0.42;
  };

  const resizeObserver = new ResizeObserver(() => {
    start();
  });

  section.addEventListener("pointermove", handlePointerMove);
  section.addEventListener("pointerleave", handlePointerLeave);
  reducedMotion.addEventListener("change", start);
  resizeObserver.observe(canvas);
  start();

  hostWindow.__heroParticleFieldCleanup = () => {
    animationTimer?.stop();
    resizeObserver.disconnect();
    reducedMotion.removeEventListener("change", start);
    section.removeEventListener("pointermove", handlePointerMove);
    section.removeEventListener("pointerleave", handlePointerLeave);
  };
};
