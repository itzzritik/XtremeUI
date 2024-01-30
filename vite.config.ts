import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig((configEnv) => ({
	plugins: [
		react(),
		tsConfigPaths(),
		linterPlugin({
			include: ['./src}/**/*.{ts,tsx}'],
			linters: [new EsLinter({ configEnv }), new TypeScriptLinter()],
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
				banner: (chunk) => {
					if (chunk.facadeModuleId.endsWith('.tsx')) return '\'use client\';';
					return null;
				},
			},

			// external: [...Object.keys(peerDependencies)],
		},
	},
}));
