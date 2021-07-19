import {html} from 'https://cdn.skypack.dev/hybrids@6';

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
