// ---------------------------------------- >>>
// ---------------------------------------- >>> resizer
// ---------------------------------------- >>>

const beg_regex = /resizer\(/
const end_regex = /\)/
const resizer_number_regex = /\s*-?[0-9]+\s*/gi
const resizer_regex = new RegExp(beg_regex.source + resizer_number_regex.source + end_regex.source)
const VIEW_WIDTH = 1400
const VIEW_HEIGHT = 1400

const _resizer = () => {
	return {
		postcssPlugin: 'postcss-resizer',
		Declaration(declaration) {
			if (resizer_regex.test(declaration.value)) {
				let final = declaration.value
				for (const matched of declaration.value.match(resizer_regex)) {
					const start_size = +matched.match(resizer_number_regex)[0].trim()
					const vw = Math.round((start_size / VIEW_WIDTH) * 100 * 1_000) / 1_000 + 'vw'
					const vh = Math.round((start_size / VIEW_HEIGHT) * 100 * 1_000) / 1_000 + 'vh'
					const min = `min(${vw}, ${vh})`
					final = final.replace(resizer_regex, min)
				}
				declaration.value = final
			}
		},
	}
}
_resizer.postcss = true

export const resizer = _resizer
