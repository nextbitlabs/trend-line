import {html} from 'https://cdn.skypack.dev/pin/hybrids@v6.0.0-4EAwbWl4Xd4pUMUqehOL/mode=imports,min/optimized/hybrids.js';

export default html`
	<style>

		svg {
			background: var(--background, transparent);
		}

		path {
			stroke-width: var(--stroke-width, 2px);
			stroke: var(--color, black);
			fill: none;
		}

		path.arrow {
			fill: var(--color, black);
		}

	</style>
`;
