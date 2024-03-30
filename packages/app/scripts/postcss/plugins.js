import easy_import from 'postcss-easy-import'
import mixins from 'postcss-mixins'
import simple_vars from 'postcss-simple-vars'
import { resizer } from './plugins.custom.js'
import hexrgba from 'postcss-hexrgba'
import custom_media from 'postcss-custom-media'
import media_minmax from 'postcss-media-minmax'
import nested from 'postcss-nested'
import global_nested from 'postcss-global-nested'
import strip from 'postcss-strip-inline-comments'

export const plugins = [
	easy_import({
		// FIXME: what is the correct input path?????
		// path: [config.input, 'router'],
		extensions: ['.css', '.scss', '.postcss'],
		prefix: '_',
	}),
	mixins,
	simple_vars,
	resizer,
	hexrgba,
	custom_media,
	media_minmax,
	nested,
	global_nested,
	strip,
]
