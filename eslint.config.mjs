import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // Wrap legacy airbnb-base and prettier configs
  ...compat.extends('airbnb-base', 'prettier'),

  // Global settings and rules
  {
    languageOptions: {
      globals: {
        document: 'readonly',
        requestAnimationFrame: 'readonly',
        localStorage: 'readonly',
        window: 'readonly',
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.astro', '.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts'] }],
    },
  },

  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslintParser,
    },
    rules: {
      'import/no-unresolved': [2, { ignore: ['astro:*'] }],
    },
  },

  // Astro files — flat config from eslint-plugin-astro v1
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      'import/no-unresolved': [2, { ignore: ['astro:*'] }],
      'import/prefer-default-export': 'off',
    },
  },
];
