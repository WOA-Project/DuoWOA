import path from "path";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import examplesVite from "mdsvexamples/vite";

import sveld from "vite-plugin-sveld";

export default defineConfig({
	plugins: [sveltekit(), sveld(), examplesVite],
	resolve: {
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "svg"],
		alias: {
			$site: path.resolve("src")
		}
	}
});
