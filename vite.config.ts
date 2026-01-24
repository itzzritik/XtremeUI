import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tsConfigPaths from "vite-tsconfig-paths";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));

function getComponentEntries() {
	const baseDirs = ["src/components/base", "src/components/layout", "src/components/hooks"];
	const entries: Record<string, string> = {};
	for (const baseDir of baseDirs) {
		const absBase = resolve(__dirname, baseDir);
		if (!existsSync(absBase)) continue;
		for (const name of readdirSync(absBase)) {
			const compDir = resolve(absBase, name);
			const entry = resolve(compDir, "exports.ts");
			if (existsSync(entry)) {
				const rel = `components/${name}/exports`;
				entries[rel] = entry;
			}
		}
	}
	return entries;
}

export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
		libInjectCss(),
		dts({
			insertTypesEntry: true,
			exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.spec.tsx"],
			beforeWriteFile: (filePath, content) => {
				if (filePath.includes("/components/base/")) return { filePath: filePath.replace("/components/base/", "/components/"), content };
				if (filePath.includes("/components/layout/")) return { filePath: filePath.replace("/components/layout/", "/components/"), content };
				return { filePath, content };
			},
		}),
	],
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, "src/index.ts"),
				...getComponentEntries(),
			},
			formats: ["es"],
		},
		outDir: "dist",
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime", "gliff", ...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
			output: {
				preserveModules: true,
				exports: "named",
				banner: ({ facadeModuleId: id }) => {
					return id && (id.endsWith(".tsx") || /components\/hooks\/.*\.ts$/.test(id)) ? "'use client';" : "";
				},
			},
		},
	},
});
