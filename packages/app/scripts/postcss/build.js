import { existsSync, mkdirSync } from 'fs'
import { config } from '../arxpoetica.config.js'
import { postcss_change } from './utils.js'

if (!existsSync(config.postcss.arxpoetica.outputStatic)) {
	mkdirSync(config.postcss.arxpoetica.outputStatic)
}
postcss_change(config.postcss.arxpoetica)
