import {scaleLinear} from 'https://cdn.skypack.dev/d3-scale@4';
import {line, curveBasis} from 'https://cdn.skypack.dev/d3-shape@3';
import {extent} from 'https://cdn.skypack.dev/d3-array@3';

// export const maxValue = {
// 	get: ({data}) => Math.max(...data.map(element => element[1])),
// };

// export const minValue = {
// 	get: ({data}) => Math.min(...data.map(element => element[1])),
// };

export const xDomain = {
	get: ({data}) => extent(data, el => el[0]),
};

export const yDomain = {
	get: ({data}) => extent(data, el => el[1]),
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

