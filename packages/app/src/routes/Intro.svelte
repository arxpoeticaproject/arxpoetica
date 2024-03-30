<script>
	import Houses from '$lib/svg/svelte/houses.svelte'
	import Attribution from '$lib/components/Attribution.svelte'
	import Button from '$lib/forms/Button.svelte'
</script>

<div id="home" class="intro">
	<div class="img">
		<div class="bg"></div>
		<Attribution
			href="https://www.instagram.com/lilbookbinder/"
			text="Several Recurrent Images. <br>Intaglio etching. Lili Hall Sharp."
		/>
	</div>
	<div class="panel">
		<h1>
			Arx
			<br />
			Poetica
		</h1>
		<div class="svg"><Houses /></div>
		<div class="text">
			<p class="blurb">
				Arx Poetica is an intentional collective of global artists connected through today’s online
				renaissance.
			</p>
			<Button href="https://discord.gg/w49kmya5G5">Join the Conversation</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.intro {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
		@media (max-width: 800px) {
			display: flex;
			flex-direction: column;
			min-height: 0;
		}
	}
	h1 {
		@media (max-width: 500px) {
			font: 60rem/70rem var(--font-alt);
		}
	}
	.img {
		position: relative;
		display: flex;
		align-items: flex-end;
		@media (max-width: 800px) {
			display: block;
			order: 2;
		}
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('/img/home/home-bg-main.jpg') no-repeat center transparent;
		background-size: cover;
		@media (max-width: 800px) {
			position: relative;
			height: 40vh;
		}
	}
	.panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 200rem 100rem 100rem;
		text-align: center;
		@media (max-width: 1000px) {
			padding: 150rem 50rem 50rem;
		}
		@media (max-width: 800px) {
			padding: 50rem 20rem;
		}
	}
	.svg {
		width: 100rem;
		margin: 50rem auto;
	}
	.text {
		margin: 0 auto;
		max-width: 500rem;
	}
	.blurb {
		font-size: 28rem;
		@media (max-width: 800px) {
			font-size: 22rem;
		}
	}
</style>
