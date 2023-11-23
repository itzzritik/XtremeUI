import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';

import { peerDependencies } from './package.json';

const { EsLinter, linterPlugin } = EsLint;

export default defineConfig((configEnv) => ({
	plugins: [
		react(),
		tsConfigPaths(),
		linterPlugin({
			include: ['./src}/**/*.{ts,tsx}'],
			linters: [new EsLinter({ configEnv })],
		}),
		dts({
			insertTypesEntry: true,
			exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.spec.tsx'],
		}),
	],
	build: {
		ssr: true,
		minify: true,
		lib: {
			name: 'XtremeUI',
			entry: resolve('src', 'index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				inlineDynamicImports: false,
				preserveModules: true,
				exports: 'named',
				banner: '\'use client\';',
			},
			external: [...Object.keys(peerDependencies)],
		},
	},
}));
