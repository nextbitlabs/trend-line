import {define, property} from 'https://cdn.skypack.dev/hybrids@6';
import {render} from './render.js';
import * as layout from './layout.js';
import * as path from './path.js';
import * as arrow from './arrow.js';

export const TrendLine = {
	data: property(parseJSON),
	xInterval: property(parseJSON),
	yInterval: property(parseJSON),
	margin: 20,
	width: 100,
	height: 100,
	render,
	...layout,
	...path,
	...arrow,
};

define('trend-line', TrendLine);

// Custom property transform for JSON support
// from element attribute.
function parseJSON(value = []) {
	return typeof value === 'string'
		? JSON.parse(value)
		: value;
}
