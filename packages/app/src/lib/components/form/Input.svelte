<script lang="ts">
	// import InfoIcon from '$lib/svelte/admin/elements/InfoIcon.svelte'
	import { onMount, createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let element = undefined
	export let classes = ''
	export let label = ''
	export let prelabel = ''
	// export let sublabel = ''
	export let value = ''
	export let required = undefined
	export let autofocus = false

	const keydown_handler = event => dispatch('keydown', { key: event.key, value, event })
	const input_handler = event => dispatch('input', { value, event })

	onMount(() => {
		const input = element.querySelector('input')
		if (autofocus && input) input.focus()
	})

	// $: console.log({ $$props })
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classes} bind:this={element}>
	{#if label}
		<span class="label">
			{label}
			{#if required}<span class="required"> *</span>{/if}
			<!-- {#if sublabel}
				<InfoIcon text={sublabel}/>
			{/if} -->
		</span>
	{/if}
	<span
		class="input"
		class:has-prelabel={prelabel}
		on:click|stopPropagation={event => dispatch('click', { value, event })}
	>
		{#if prelabel}
			<span class="prelabel">{prelabel}</span>
		{/if}
		<slot {keydown_handler} {input_handler}></slot>
	</span>
</label>

<style lang="scss">
	.label {
		display: flex;
		align-items: center;
		gap: 4rem;
		margin: 0 0 5rem 10rem;
		font: var(--bold) 14rem/1 var(--font);
	}
	.input {
		display: block;
		position: relative;
	}
	.input :global(input) {
		display: block;
		width: 100%;
		height: 36rem;
		margin: 0;
		padding: 0 6rem;
		background-color: var(--white-2);
		border: 3rem solid var(--red-4);
		box-shadow: none;
		color: var(--red-2);
		font: 15rem/1 var(--font);
		transition: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		&:focus {
			border-color: var(--white-true);
			outline: none;
			box-shadow: 0 0 20rem rgba(255, 255, 255, 0.6);
		}
		.has-prelabel & { border-radius: 0 5rem 5rem 0; }
		.center & { text-align: center; }
	}
	.input :global(input[disabled]) {
		background-color: var(--gray-4);
		border: 3rem solid var(--gray-1);
		color: var(--gray-1);
	}
	.has-prelabel {
		display: flex;
	}
	.prelabel {
		display: flex;
		align-items: center;
		height: 36rem;
		padding: 0 10rem 0 8rem;
		background-color: var(--gray-1);
		border: 3rem solid var(--red-1);
		border-right: none;
		font: 14rem/1 var(--font);
		color: var(--gray-4);
		white-space: nowrap;
	}
	.required {
		color: var(--red-4);
	}
</style>
