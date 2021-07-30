import {define, property} from 'https://cdn.skypack.dev/pin/hybrids@v6.0.0-4EAwbWl4Xd4pUMUqehOL/mode=imports,min/optimized/hybrids.js';
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
