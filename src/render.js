import {html} from 'https://cdn.skypack.dev/pin/hybrids@v6.0.0-4EAwbWl4Xd4pUMUqehOL/mode=imports,min/optimized/hybrids.js';
import style from './style.js';

export function render({
	width,
	height,
	globalTransform,
	path,
	arrowTransform,
	trianglePath,
}) {
	return html`
		${style}
		<svg width=${width} height=${height}>
			<g transform="${globalTransform}">
				<path d="${path}"/>
				<g transform="${arrowTransform}">
					<path class="arrow" d="${trianglePath}"/>
				</g>
			</g>
		</svg>
	`;
}
