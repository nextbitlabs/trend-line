export const arrowTransform = {
	get: ({data, xScale, yScale}) => {
		const l = data.length;
		const x2 = xScale(data[l - 1][0]);
		const x1 = xScale(data[l - 2][0]);
		const y2 = yScale(data[l - 1][1]);
		const y1 = yScale(data[l - 2][1]);
		const alpha = (Math.atan((y2 - y1) / (x2 - x1)) * 180) / Math.PI;
		return `translate(${x2}, ${y2}) rotate(${alpha})`;
	},
};

export const trianglePath = {
	get: () => {
		const s = 5;
		return `M 0 ${s / 2} L 0 ${-s / 2} L ${s * 0.866} 0 Z`;
	},
};
