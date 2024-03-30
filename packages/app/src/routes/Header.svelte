<script>
	// import { page } from '$app/stores'
	// import Button from '$lib/components/form/Button.svelte'
	import IconMenu from '$lib/svg/svelte/icon-menu.svelte'
	import IconHome from '$lib/svg/svelte/logo-small.svelte'

	let open = false
</script>

<header class:open>
	<nav>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="icon hamburger-icon" on:click={() => (open = !open)}>
			<IconMenu />
		</div>
		<a href="/" class="home" on:click={() => (open = false)}>
			<div class="icon home-icon"><IconHome /></div>
			<div class="text">Home</div>
		</a>
		<div class="menu">
			<a href="/about" on:click={() => (open = false)}>About</a>
			<!-- <a href="#exhibitions" on:click={() => open = false}>Exhibitions</a> -->
			<!-- <a href="#events" on:click={() => open = false}>Events</a> -->
			<!-- <a href="/campaigns" on:click={() => open = false}>Campaigns</a> -->
			<a href="/contributors" on:click={() => (open = false)}>Contributors</a>
			<!-- {#if $page.data.user}
				<a href="/account" class="special" on:click={() => open = false}>Account</a>
			{:else}
				<Button label="Get Started" href="/get-started" on:click={() => open = false}/>
			{/if} -->
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		padding: 0 30rem;
		background-color: rgba(0, 0, 0, 0.8);
		font: 20rem/1 var(--font);
		z-index: var(--z-front);
	}
	nav {
		display: grid;
		grid-auto-flow: column;
		justify-content: center;
		align-items: center;
		gap: 50rem;
		height: 100rem;
	}
	.icon {
		display: flex;
		align-items: center;
		width: 24rem;
		height: 24rem;
		display: none;
	}
	.menu {
		display: grid;
		grid-auto-flow: column;
		justify-content: center;
		align-items: center;
		gap: 50rem;
	}
	a {
		text-decoration: none;
	}
	.special {
		color: var(--red-4);
		cursor: pointer;
	}
	@media (max-width: 800px) {
		header {
			position: relative;
			padding: 0 25rem;
			&.open {
				background-color: hsl(var(--red-hsl-2) / 0.9);
			}
		}
		nav {
			justify-content: space-between;
			gap: 26rem;
			height: 74rem;
		}
		.icon {
			display: flex;
			transition: color 0.2s ease-in-out;
			cursor: pointer;
			&:hover {
				color: var(--red-4);
			}
			:global(svg) {
				flex: 1;
			}
		}
		.home {
			.text {
				display: none;
			}
		}
		.menu {
			display: none;
			position: absolute;
			top: 74rem;
			right: 0;
			left: 0;
			padding: 25rem;
			background-color: hsl(var(--red-hsl-2) / 0.9);
			.open & {
				display: grid;
				gap: 20rem;
				grid-auto-flow: row;
				justify-content: flex-start;
			}
		}
	}
</style>
