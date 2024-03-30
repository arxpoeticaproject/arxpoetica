<script lang="ts">
	import Input from '$lib/components/form/Input.svelte'

	export let value = ''
	export let id = undefined
	export let required = undefined
	export let disabled = undefined
	export let placeholder = undefined
</script>

<Input {...$$props} let:keydown_handler let:input_handler>
	<input
		type="text"
		{id}
		{required}
		{disabled}
		{placeholder}
		bind:value
		on:keydown={keydown_handler}
		on:input={input_handler}
	/>
</Input>

<!-- <style lang="scss"></style> -->
