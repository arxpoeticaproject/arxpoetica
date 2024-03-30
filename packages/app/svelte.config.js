import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { preprocess_style } from './scripts/postcss/preprocess.style.js'

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: { adapter: adapter() },
	extensions: ['.svelte'],
	preprocess: [vitePreprocess({ script: true, style: false }), { style: preprocess_style }],
}
