<div class="title" style={style()}>
	{#if title}
		<h1>{title}</h1>
	{/if}
</div>

<script>
	export let title
	export let img
	export let width = 2000
	export let height = 665
	function style() {
		let style = `padding:0 0 ${height / width * 100}%;`
		if (img) {
			style += `background-image:url('${img}');`
		}
		return style
	}
</script>

<style lang="scss">
	.title {
		position: relative;
		min-height: 200rem;
		margin: 100rem 0 0;
		background: none no-repeat center right black;
		background-size: cover;
		@media (max-width: 800px) { margin: 0; }
		// &::after {
		// 	content: '';
		// 	position: absolute;
		// 	top: 0;
		// 	right: 0;
		// 	bottom: 0;
		// 	left: 0;
		// 	background-color: rgba(239, 0, 0, 0.25);
		// 	color: rgb(239, 87, 80);
		// }
	}
	h1 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.8);
		z-index: 2;
		@media (max-width: 450px) { font-size: 40rem; }
	}
</style>
