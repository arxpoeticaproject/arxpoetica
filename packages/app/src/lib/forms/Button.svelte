<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let href = false
	export let classes = ''
	export let style = undefined
	export let label = 'Click'
	export let type = undefined
	export let formaction = undefined
	export let disabled = undefined
	export let element
	export let stop_propagation = undefined
	export let handler = () => {}
	function internal_handler(event) {
		if (stop_propagation) {
			event.stopPropagation()
		}
		handler(event)
		dispatch('click', event)
	}
	// import Plus from '../../../svg/icon-plus.svelte'
</script>

{#if href}
	<a
		bind:this={element}
		{href}
		class="button {classes}"
		{style}
		class:disabled
		on:click={(event) => internal_handler(event)}
	>
		<slot>{label}</slot>
		<!-- {#if classes.includes('plus')}<span class="svg"><Plus/></span>{/if} -->
	</a>
{:else}
	<button
		bind:this={element}
		class="button {classes}"
		{style}
		{type}
		{formaction}
		{disabled}
		on:click={(event) => internal_handler(event)}
	>
		<slot>{label}</slot>
		<!-- {#if classes.includes('plus')}<span class="svg"><Plus/></span>{/if} -->
	</button>
{/if}

<style lang="scss">
	.button {
		display: inline-block;
		margin: 0;
		padding: 15rem 30rem;
		background-color: var(--red-3);
		border: 0;
		border-radius: 2rem;
		color: var(--white-true);
		font: 18rem var(--font);
		text-transform: none;
		text-align: center;
		letter-spacing: 1rem;
		white-space: nowrap;
		transition:
			background-color 0.15s ease-in-out,
			color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
		text-decoration: none;
		cursor: pointer;
		-webkit-appearance: none;
		user-select: none;
		&:hover {
			background-color: var(--white-true) !important;
			color: var(--red-4) !important;
			box-shadow: 0 0 20rem rgba(255, 255, 255, 0.6);
		}
		&:focus {
			border-color: var(--form-border);
			outline: none;
			box-shadow: var(--form-shadow);
		}
		&.bright {
			background-color: var(--white-2);
			color: var(--red-3);
		}
		&.yellow {
			background-color: var(--yellow-5);
			color: var(--yellow-1);
			&:hover {
				color: var(--yellow-1) !important;
			}
		}
		&.green {
			background-color: var(--green-3);
			color: var(--green-1);
			&:hover {
				color: var(--green-2) !important;
			}
		}
		&.blue {
			background-color: var(--blue-3);
			&:hover {
				color: var(--blue-3) !important;
			}
		}
		&.purple {
			background-color: var(--purple-3);
			&:hover {
				color: var(--purple-3) !important;
			}
		}
		&.blank {
			background-color: transparent;
			&:hover {
				background-color: transparent !important;
				box-shadow: none !important;
			}
			&.bright {
				color: var(--white-true);
			}
		}
		&[disabled] {
			background-color: var(--admin-accent-2);
			color: var(--admin-bg);
			cursor: default;
			pointer-events: none;
		}
		&[class*='blank'][disabled] {
			background-color: transparent;
			color: var(--admin-accent-2);
		}
	}
	.svg {
		width: 10rem;
		height: 10rem;
		margin: 0 0 0 6rem;
		line-height: 0;
	}
</style>
