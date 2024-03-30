import postcss from 'postcss'
import syntax from 'postcss-scss'
import ansicolors from 'ansi-colors'
const { red, yellow } = ansicolors
import { plugins } from './plugins.js'

export const preprocess_style = async ({ filename, content, attributes }) => {
	try {
		let code = content

		// postcss preprocessing
		if (attributes.lang?.includes('scss') || attributes.type?.includes('scss')) {
			const result = await postcss(plugins).process(code, {
				from: 'src',
				syntax,
			})

			if (result.css && typeof result.css === 'string') code = result.css.toString()
		}
		return { code }
	} catch (err) {
		console.log(red('Error with PostCSS compile.'))
		console.log(yellow(err.reason))
		console.log(yellow(filename))
		console.log()
	}
}
