# &lt;trend-line&gt;

![Latest Release](https://badgen.net/github/release/nextbitlabs/trend-line) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/trend-line)

Web component implementation of a trend-line.

<img width="100px" src="image.png">

## Usage

Import `trend-line` and set CSS custom properties:

```
<head>
	<script type="module">
		import "https://cdn.skypack.dev/@nextbitlabs/trend-line";
	</script>
	<style>
		/*
			CSS custom properties penetrate the Shadow DOM.
			They are useful to provide custom styling.
		*/
		trend-line {
			--color: #333; /* default black */
			--stroke-width: 2px; /* default 2px */
			--background: #eee; /* default transparent */
		}
	</style>
</head>
```

Use the custom element:

```
<body>
	<trend-line width="100" height="100" margin="20"></trend-line>
</body>
```

Set the data to plot:

```
<script>
	const element = document.querySelector("trend-line");
	element.data = [[1, 3], [2, 5], [3, 2]];
</script>
```

Please have a look at the [demo](https://pp41i.csb.app/).

## License

MIT
