export const innerWidth = {
	get: ({width, margin}) =>
		width - (2 * margin),
};

export const innerHeight = {
	get: ({height, margin}) => height - (2 * margin),
};

export const globalTransform = {
	get: ({margin}) => `translate(${margin}, ${margin})`,
};
