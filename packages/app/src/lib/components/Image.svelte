<img {src} {alt} {title} class:loaded use:lazy/>

<script>
	export let src = ''
	export let alt = ''
	export let title
	export let loaded = false

	function lazy(node) {
		const img = new Image()
		img.onload = () => loaded = true
		img.src = src
		return { destroy() {} } // noop
	}
</script>

<style lang="scss">
	img {
		display: block;
		width: 100%;
		transition: opacity 0.5s ease-in-out;
		opacity: 0;
		&.loaded { opacity: 1; }
	}
</style>
