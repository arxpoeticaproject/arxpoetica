<script>
	import SEO from '$lib/components/SEO.svelte'
	import Intro from './Intro.svelte'
	import Quote from './Quote.svelte'
	import OurStory from './OurStory.svelte'

	export let data
</script>

<svelte:head>
	<SEO title="Arx Poetica" />
</svelte:head>

<Intro />
<Quote />
<OurStory />
<!-- <FIXME/> -->

<!-- <style lang="scss"></style> -->
