import { existsSync, mkdirSync } from 'fs'
import path from 'path'
import CheapWatch from 'cheap-watch'
import ansicolors from 'ansi-colors'
const { green, yellow } = ansicolors
import { config } from '../arxpoetica.config.js'
import { postcss_change } from './utils.js'

const watcher = async (name, change) => {
	console.log('-- -- -- -- -- >>', green('Watching Svelte Kit config:'), name)

	const watch = new CheapWatch({
		dir: path.join(process.cwd(), `/${config.postcss[name].input}`),
		filter: ({ path, stats }) => {
			const match =
				path.indexOf('.git') !== 0 &&
				path.indexOf('node_modules') !== 0 &&
				// path.indexOf('_') !== 0 &&
				(!!path.match(config.postcss[name].filter) || stats.isDirectory())
			return match
		},
		debounce: 100,
	})

	await watch.init()

	watch.on('+', ({ path, stats, isNew }) => {
		if (stats.isFile()) {
			console.log('-- -- -- -- -- >>', yellow(isNew ? 'Adding' : 'Changing'), './' + path)
			if (change) {
				change(config.postcss[name])
			}
		}
	})
}

if (!existsSync(config.postcss.arxpoetica.outputStatic)) {
	mkdirSync(config.postcss.arxpoetica.outputStatic)
}
watcher('arxpoetica', postcss_change)
postcss_change(config.postcss.arxpoetica)
