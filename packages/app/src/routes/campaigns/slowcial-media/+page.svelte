<script>
	import Houses from '$lib/svg/svelte/houses.svelte'
	import Button from '$lib/forms/Button.svelte'
</script>

<section class="section-cover">
	<div class="svg"><Houses /></div>
	<h1><span class="small">Welcome to</span> Arx Poetica</h1>
	<h2 class="subtitle">
		In the spirit of gathering all that is good, art is a bridge to faith, hope, and charity.
	</h2>
</section>

<section class="section-join">
	<div class="inner">
		<p>Ready to dive in?</p>
		<Button href="https://discord.gg/w49kmya5G5">Join us on Discord!</Button>
	</div>
</section>

<section class="section-intro">
	<div class="side"></div>
	<div class="intro">
		<h3>A New Era of Connection Through Art</h3>
		<p>
			In a world rushing through digital noise, Arx Poetica stands as a beacon for change. We're
			more than a platform; we're a movement of thoughtful connections, where community events and
			campaigns foster deep, meaningful interactions around art.
		</p>
	</div>
</section>

<!-- <section class="section-whatever">
	<h3>What Is 'Slow-cial Media'?</h3>
	<p>
		It's our answer to the fast-paced, often superficial world of online interaction. Our
		open-source social media platform encourages you to pause, reflect, and connect more
		meaningfully with art and community. Here, every post, every comment, is an invitation to engage
		with intention and depth.
	</p>
</section>

<section class="section-whatever">
	<h3>Why Join Us?</h3>
	<ul>
		<li>
			Deepen Your Artistic Experience: Explore art in a space that values quality over quantity.
		</li>
		<li>
			Foster Genuine Connections: Join a community that prioritizes real engagement over likes and
			follows.
		</li>
		<li>
			Contribute to a Collective Vision: Whether you're an artist, a coder, or an art enthusiast,
			your skills and passion can help shape this platform.
		</li>
	</ul>
</section>

<section class="section-whatever">
	<h3>How Can You Contribute?</h3>

	<ul>
		<li>Artists: Share your work in a space that cherishes artistic integrity and depth.</li>
		<li>
			Engineers: Lend your coding talents to build a platform that redefines social media
			engagement.
		</li>
		<li>
			Evangelists: Spread the word about our vision for a more mindful, connected art community.
		</li>
	</ul>
</section>

<section class="section-whatever">
	<h3>Ready to Join the Renaissance?</h3>
	<p>
		Arx Poetica is not just about creating a new platform; it's about creating a new way of
		experiencing art and community. If you're ready to be part of this transformative journey, [sign
		up here] to stay updated or [join our Discord] to become part of the conversation today.
	</p>
</section>

<section class="section-whatever">
	<p>Let's build something beautiful together.</p>
</section> -->

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20rem;
		padding: 10vh 10vw;
		font-size: 30rem;
	}
	.section-cover {
		background: url('/img/campaigns/campaign-1-intro.jpg') repeat center transparent;
		min-height: 96vh;
		padding: 15vh 10vw;
		.svg {
			width: 100%;
			max-width: 800rem;
			margin: 0 0 20rem;
			color: var(--red-2);
		}
		h1 {
			text-align: center;
			line-height: 1;
		}
		.small {
			display: block;
			font-size: 30rem;
		}
		.subtitle {
			font: 22rem/1.6 var(--font);
			margin: 0;
			text-align: center;
		}
		@media (max-height: 1000px) {
			.svg {
				max-width: 600rem;
			}
		}
		@media (max-height: 800px) {
			.svg {
				max-width: 400rem;
			}
		}
	}
	.section-join {
		// background-color: var(--red-2);
		background-color: black;
		font-size: 20rem;
		text-align: center;
		:global(a) {
			margin-top: 5rem;
			font-weight: bold;
			// background-color: var(--red-1);
		}
	}
	.section-intro {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20rem;
		padding: 0;
		.side {
			background: url('/img/campaigns/campaign-img-1.jpg') no-repeat center transparent;
			background-size: cover;
			min-height: 200vh;
		}
		.intro {
			position: sticky;
			top: 0;
			bottom: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 100rem;
			min-height: 100vh;
			padding: 100rem;
			text-align: center;
			// background: url('/img/campaigns/campaign-tile-2.jpg') repeat center transparent;
		}
		@media (max-width: 1200px) {
			grid-template-columns: 1fr;
			background: url('/img/campaigns/campaign-img-1.jpg') no-repeat center transparent;
			background-size: cover;
			padding: 5vw;
			.side {
				display: none;
			}
			.intro {
				position: static;
				gap: 20rem;
				padding: 10vw;
				min-height: auto;
				background-color: rgba(0, 0, 0, 0.8);
			}
		}
	}
	h1,
	h3 {
		margin: 0;
		font-size: 80rem;
	}
	p {
		margin: 0;
	}
	@media (max-width: 1200px) {
		h1,
		h3 {
			font-size: 60rem;
		}
		p {
			font-size: 24rem;
		}
	}
	@media (max-width: 600px) {
		h1,
		h3 {
			font-size: 32rem;
		}
		p {
			font-size: 19rem;
		}
	}
</style>
