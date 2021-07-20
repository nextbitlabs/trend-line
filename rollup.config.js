import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.module,
			format: 'es'
		},
		external: [
			'https://cdn.skypack.dev/hybrids@6',
			'https://cdn.skypack.dev/d3-scale@4',
			'https://cdn.skypack.dev/d3-shape@3',
			'https://cdn.skypack.dev/d3-array@3'
		]
	},
];
