import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', strict: false },
		{ file: 'index.es.mjs', format: 'es', strict: false }
	],
	plugins: [
		babel({
			presets: [
				['env', {
					modules: false,
					targets: { node: 6 }
				}]
			]
		})
	]
};
