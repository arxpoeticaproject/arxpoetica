<script>
	export let classes = ''
</script>

<div class="row {classes}">
	<slot></slot>
</div>

<style lang="scss">
	.row {
		max-width: 600rem;
		margin: 0 0 20rem;
		&.center { text-align: center; }
		&.right { text-align: right; }
		&.full {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: stretch;
		}
	}
</style>
