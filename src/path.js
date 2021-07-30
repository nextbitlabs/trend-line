import {scaleLinear} from 'https://cdn.skypack.dev/pin/d3-scale@v4.0.0-wZtVxcXJGOuNydE7pnqz/mode=imports,min/optimized/d3-scale.js';
import {line, curveBasis} from 'https://cdn.skypack.dev/pin/d3-shape@v3.0.1-fms1GpCrjZzpeCX47WIF/mode=imports,min/optimized/d3-shape.js';
import {extent} from 'https://cdn.skypack.dev/pin/d3-array@v3.0.1-m5FhU7CD6AEqTwkMJT6E/mode=imports,min/optimized/d3-array.js';

export const xDomain = {
	get: ({data, xInterval}) =>
		xInterval.length === 2
			? xInterval
			: extent(data, element => element[0]),
};

export const yDomain = {
	get: ({data, yInterval}) =>
		yInterval.length === 2
			? yInterval
			: extent(data, element => element[1]),
};

export const xScale = {
	get: ({xDomain, innerWidth}) =>
		scaleLinear()
			.domain(xDomain)
			.range([0, innerWidth]),
};

export const yScale = {
	get: ({yDomain, innerHeight}) =>
		scaleLinear()
			.domain(yDomain)
			.range([innerHeight, 0]),
};

export const path = {
	get: ({data, xScale, yScale}) => {
		const trendLine = line()
			.x(d => xScale(d[0]))
			.y(d => yScale(d[1]))
			.curve(curveBasis);

		return trendLine(data);
	},
};

