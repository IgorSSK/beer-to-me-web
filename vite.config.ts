import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: "@domain", replacement: path.resolve(__dirname, "./src/domain") },
		{ find: "@data", replacement: path.resolve(__dirname, "./src/data") },
		{ find: "@infra", replacement: path.resolve(__dirname, "./src/infra") },
		{ find: "@application", replacement: path.resolve(__dirname, "./src/application") },
		{ find: "@presentation", replacement: path.resolve(__dirname, "./src/presentation") },
		{ find: "@main", replacement: path.resolve(__dirname, "./src/main") },
		{ find: "@common", replacement: path.resolve(__dirname, "./src/common") }]
	}
});
