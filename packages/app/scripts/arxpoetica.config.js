export const config = {
	postcss: {
		arxpoetica: {
			input: 'src/postcss',
			filename: 'arxpoetica',
			filter: /\.(postcss|css|scss)$/,
			outputStatic: 'src',
		},
	},
}
