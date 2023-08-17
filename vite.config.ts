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
			// rollupTypes: true,
			insertTypesEntry: true,
			exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.spec.tsx'],
		}),
	],
	build: {
		ssr: true,
		minify: true,
		sourcemap: true,
		lib: {
			name: 'XtremeUI',
			entry: resolve('src', 'index.ts'),
			formats: ['es'],

			// fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			output: {
				preserveEntrySignatures: 'strict',
				inlineDynamicImports: false,
				preserveModules: true,
				exports: 'named',
				banner: '\'use client\';',
			},
			external: [...Object.keys(peerDependencies)],
		},
	},
}));
