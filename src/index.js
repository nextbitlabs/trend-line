import {define} from 'https://cdn.skypack.dev/hybrids@6';
import {render} from './render.js';
import * as layout from './layout.js';
import * as path from './path.js';
import * as arrow from './arrow.js';

export const TrendLine = {
	data: [],
	margin: 20,
	width: 100,
	height: 100,
	xInterval: [],
	yInterval: [],
	render,
	...layout,
	...path,
	...arrow,
};

define('trend-line', TrendLine);
