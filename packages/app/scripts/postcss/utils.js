import { readFile, writeFile } from 'fs/promises'
import ansicolors from 'ansi-colors'
const { cyan } = ansicolors

import postcss from 'postcss'
import syntax from 'postcss-scss'
import { plugins } from './plugins.js'

export const postcss_change = async (config) => {
	try {
		const from = `${config.input}/${config.filename}.postcss`
		const to = `${config.outputStatic}/${config.filename}.css`
		const content = await readFile(from)

		const result = await postcss(plugins).process(content, {
			from,
			to,
			syntax,
			map: { inline: false },
		})
		// console.log(result.css)
		// console.log(result.map)
		await writeFile(to, result.css.toString())
		if (result.map) {
			await writeFile(`${to}.map`, result.map.toString())
		}
		// await refresh()
		console.log(
			'-- -- -- -- -- >>',
			cyan('Finished converting'),
			`${config.filename}.postcss`,
			cyan('to'),
			`${config.filename}.css`,
		)
		console.log()
	} catch (err) {
		console.error(`error: ${err}`)
	}
}
