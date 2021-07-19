import {html} from 'https://cdn.skypack.dev/hybrids@6';
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
