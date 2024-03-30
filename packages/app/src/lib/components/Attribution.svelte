<p class="attribution {position}">
	<a {href} target="_blank" rel="noreferrer">
		{@html text}
	</a>
</p>

<script>
	export let href = ''
	export let text = ''
	export let position
</script>

<style lang="scss">
	.attribution {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		margin: 0;
		padding: 18rem 25rem;
		background-color: rgba(0, 0, 0, 0.75);
		font: 13rem/1.2 var(--font);
		text-align: center;
		// text-transform: uppercase;
		&.left,
		&.right {
			top: 0;
			width: auto;
			height: 100%;
			writing-mode: vertical-lr;
			transform: rotate(180deg);
		}
		&.left { right: auto; }
		&.right { left: auto; }
		:global(br) { display: none; }
		@media (max-width: 800px) {
			position: static;
			:global(br) { display: block; }
		}
	}
</style>
