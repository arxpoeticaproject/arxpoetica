<script>
	import '../arxpoetica.css'
	// import Header from './Header.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<meta name="version" content={__VERSION__} />
</svelte:head>

<!-- <Header /> -->
<main>
	{@render children()}
</main>

<!-- <style lang="scss"></style> -->
