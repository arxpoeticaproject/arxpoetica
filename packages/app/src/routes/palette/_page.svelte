<script>
	const palette = [
		{ color: 'black', hue: 0, sat: 50, lit: 50 },
		{ color: 'white', hue: 0, sat: 50, lit: 50 },
		{ color: 'gray', hue: 0, sat: 50, lit: 50 },
		{ color: 'brown', hue: 3, sat: 50, lit: 50 },
		{ color: 'red', hue: 3, sat: 83, lit: 63 },
		{ color: 'orange', hue: 33, sat: 50, lit: 50 },
		{ color: 'yellow', hue: 50, sat: 50, lit: 50 },
		{ color: 'green', hue: 150, sat: 50, lit: 50 },
		{ color: 'blue', hue: 200, sat: 50, lit: 50 },
		{ color: 'purple', hue: 270, sat: 50, lit: 50 },
		{ color: 'pink', hue: 320, sat: 50, lit: 50 },
	]
	const numbers = Array.from({ length: 6 }, (v, index) => index + 1)
</script>

<div id="home" class="intro">
	<div class="panel bg"></div>
	<div class="panel">
		<div class="palette">
			{#each palette as { color, hue, sat, lit } (color)}
				<h2 class="color">{color}</h2>
				<div class="cols">
					{#each numbers as num, index (num)}
						{@const saturation = 10 + (80 / 6 * (index + 1))}
						{@const lightness = 10 + (80 / 6 * (index + 1))}
						<div class="col" style="background-color: hsl({hue} {saturation}% {lightness}%);">
							<div class="col" style="background-color: var(--{color}-{index + 1});">
								{num}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.intro {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 2fr;
		justify-content: center;
		align-items: center;
	}
	.panel {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 100rem 0 0;
	}
	.bg {
		background: url('/img/home/home-bg-main.jpg') no-repeat center transparent;
		background-size: cover;
	}
	.palette {
		--square-size: 80rem;
		--square-gap: 20rem;
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: center;
		align-items: center;
		gap: var(--square-gap);
	}
	.color {
		margin: 0;
		font: 20rem/1 var(--font);
	}
	.cols {
		display: grid;
		grid-template-columns: repeat(6, var(--square-size));
		gap: var(--square-gap);

	}
	.col {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--square-size);
		height: var(--square-size);
		border-radius: 100%;
		.col { border-radius: 2rem; }
	}
</style>
