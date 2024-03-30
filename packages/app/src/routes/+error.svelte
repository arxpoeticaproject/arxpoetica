<script lang="ts">
	import { page } from '$app/stores'
	import Houses from '$lib/svg/svelte/houses.svelte'
</script>

<div class="layout">
	<div class="content">
		<h1>{$page.status}</h1>
		<h2>{$page.error?.message}</h2>
		<a href="/" class="return">
			<div class="svg"><Houses /></div>
			<h3>Return Home</h3>
		</a>
	</div>
</div>

<style lang="scss">
	.layout {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		height: 100vh;
		background: url('/img/404.jpg') no-repeat center transparent;
		background-size: cover;
		text-align: center;
	}
	.content {
		padding: 0 0 15vh;
	}
	h2 {
		margin: 0 0 50rem;
	}
	a {
		text-decoration: none;
		&:hover {
			color: white;
		}
	}
</style>
