<script>
	import '../arxpoetica.css'
	// import Header from './Header.svelte'

	// // SEE: https://destroytoday.com/blog/100vw-and-the-horizontal-overflow-you-probably-didnt-know-about
	// let innerWidth, clientWidth
</script>

<!-- <svelte:window bind:innerWidth />
<svelte:head>
	{@html '<' +
		'style' +
		`>:root { --scrollbar-width: ${innerWidth - clientWidth}rem; }<` +
		'/style' +
		'>'}
</svelte:head> -->

<!-- <Header /> -->
<main>
	<slot />
</main>

<!-- <style lang="scss"></style> -->
