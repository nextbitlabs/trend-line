import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.module,
			format: 'es'
		},
		external: [
			'https://cdn.skypack.dev/pin/hybrids@v6.0.0-4EAwbWl4Xd4pUMUqehOL/mode=imports,min/optimized/hybrids.js',
			'https://cdn.skypack.dev/pin/d3-scale@v4.0.0-wZtVxcXJGOuNydE7pnqz/mode=imports,min/optimized/d3-scale.js',
			'https://cdn.skypack.dev/pin/d3-shape@v3.0.1-fms1GpCrjZzpeCX47WIF/mode=imports,min/optimized/d3-shape.js',
			'https://cdn.skypack.dev/pin/d3-array@v3.0.1-m5FhU7CD6AEqTwkMJT6E/mode=imports,min/optimized/d3-array.js'
		]
	},
];
