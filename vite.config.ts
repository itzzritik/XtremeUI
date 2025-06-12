import { readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getComponentEntries () {
	const baseDirs = ['src/components/base', 'src/components/layout', 'src/components/hooks'];
	const entries = {};
	for (const baseDir of baseDirs) {
		const absBase = resolve(__dirname, baseDir);
		if (!existsSync(absBase)) continue;
		for (const name of readdirSync(absBase)) {
			const compDir = resolve(absBase, name);
			const entry = resolve(compDir, 'exports.ts');
			if (existsSync(entry)) {
				const rel = `components/${baseDir.split('/').pop()}/${name}/exports`;
				entries[rel] = entry;
			}
		}
	}
	return entries;
}

export default defineConfig((configEnv) => {
	return {
		plugins: [
			react(),
			tsConfigPaths(),
			linterPlugin({
				include: ['./src/**/*.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
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

			// cssCodeSplit: true,
			lib: {
				name: 'XtremeUI',
				entry: getComponentEntries(),
				formats: ['es', 'cjs'],
			},
			outDir: 'dist',
			rollupOptions: {
				output: {
					inlineDynamicImports: false,
					preserveModules: true,
					exports: 'named',
					banner: ({ facadeModuleId: id }) => {
						return (id && (id.endsWith('.tsx') || (/components\/hooks\/.*\.ts$/).test(id)))
							? '\'use client\';'
							: null;
					},
				},
			},
		},
	};
});
