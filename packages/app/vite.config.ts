const { PORT, DEV_LISTEN_ON_ALL_HOSTS, DEV_USE_HTTPS } = process.env
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import svg from '@poppanator/sveltekit-svg'
import { plugins } from './scripts/svgo.config.js'
import mkcert from 'vite-plugin-mkcert'
import { version } from './package.json'

/** @type {import('vite').UserConfig} */
const config = {
	clearScreen: false,
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/svg/svelte/'],
			svgoOptions: { multipass: true, plugins: plugins.svelte as [] },
		}),
		svg({
			includePaths: ['./src/lib/svg/static/'],
			svgoOptions: { multipass: true, plugins: plugins.static as [] },
		}),
	],
	define: {
		__VERSION__: JSON.stringify(version),
	},
	test: { include: ['src/**/*.{test,spec}.{js,ts}'] },
	server: { port: PORT || 3001, host: false, https: false },
}

if (DEV_LISTEN_ON_ALL_HOSTS === 'true') config.server.host = true as boolean

// SEE: https://github.com/FiloSottile/mkcert#installing-the-ca-on-other-systems
// OR IF DESPERATE: https://readwriteexercise.com/posts/trust-self-signed-certificates-macos/
if (DEV_USE_HTTPS === 'true') {
	config.server.host = true
	config.server.https = true
	config.plugins.push(mkcert({ autoUpgrade: true, savePath: './certs' }))
}

export default defineConfig(config)
