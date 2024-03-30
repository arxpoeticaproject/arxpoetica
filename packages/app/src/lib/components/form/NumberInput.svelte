<script lang="ts">
	import Input from '$lib/components/form/Input.svelte'

	export let value = 0
	export let id = undefined
	export let required = undefined
	export let disabled = undefined
	export let placeholder = undefined
	export let step = undefined
	export let min = undefined
	export let max = undefined
	export let pattern = undefined
</script>

<Input {...$$props} let:keydown_handler let:input_handler>
	<input
		type="number"
		{id}
		{required}
		{disabled}
		{placeholder}
		{step}
		{min}
		{max}
		{pattern}
		bind:value
		on:keydown={keydown_handler}
		on:input={input_handler}
	/>
</Input>

<style lang="scss">
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>
