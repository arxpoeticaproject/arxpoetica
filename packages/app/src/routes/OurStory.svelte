<script>
	import Attribution from '$lib/components/Attribution.svelte'
	import TextDivider from '$lib/svg/svelte/text-divider.svelte'
	import Button from '$lib/forms/Button.svelte'
	// import FacebookIcon from '$lib/svg/svelte/social-icon-facebook.svelte'
	// import InstagramIcon from '$lib/svg/svelte/social-icon-instagram.svelte'
	// import TwitterIcon from '$lib/svg/svelte/social-icon-twitter.svelte'
</script>

<div id="our-story" class="our-story">
	<div class="filler"></div>
	<div class="panel">
		<div class="text">
			<h2>Our Story</h2>
			<div class="divider"><TextDivider /></div>
			<p>Arx Poetica is an intentional artist collective.</p>
			<!-- <div class="line"></div> -->
			<p>
				The world is in the midst of a global renaissance. Just as the printing press promoted the
				rapid spread of ideas, so too the internet promotes the rise of global content creativity
				and influence. To adapt <a
					href="https://www.youtube.com/watch?v=v9JTgpk1hXs"
					target="_blank"
					rel="noreferrer">a Pixar expression</a
				>, “anyone can create.”
			</p>
			<p>
				As the media philosopher Marshall McLuhan anticipated, local communities can be global, and
				global can be local. To that end, Arx Poetica connects artists both in our communities and
				across the globe. We are united through online social media and offline local meetups.
			</p>
			<div class="invite">
				<Button href="https://discord.gg/w49kmya5G5">Join the Conversation</Button>
			</div>
			<p>
				We are artists of all types—from musician to painter to filmmaker—connected for a common
				purpose: to raise the standard for good and purposeful art.
			</p>
			<!-- <div class="line"></div> -->
			<p>We are artists of good intent.</p>
			<!-- <p>
				Join Arx Poetica by participating in our worldwide and community events, joining in our social media art campaigns (hashtag #arxpoetica on 
				<a class="account" target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/arxpoeticagroup"><span class="svg"><FacebookIcon/></span> <span class="handle">Facebook</span></a>,
				<a class="account" target="_blank" rel="noreferrer" href="https://www.instagram.com/arxpoetica"><span class="svg"><InstagramIcon/></span> <span class="handle">Instagram</span></a>, and
				<a class="account" target="_blank" rel="noreferrer" href="https://twitter.com/arxpoetica"><span class="svg"><TwitterIcon/></span> <span class="handle">Twitter</span></a>),
				engaging in our shared exhibitions, and signing up for our email updates list.
			</p> -->
			<!-- <p>
				We are artists from all walks of life—any nationality or stripe—striving for harmony in a world of paradox, for greater meaning in a world of sacred and profane.
			</p> -->
			<div class="divider end"><TextDivider /></div>
		</div>
	</div>
	<Attribution
		href="https://www.instagram.com/lilbookbinder/"
		text="Moontrees. Lithograph. Lili Hall Sharp."
		position="right"
	/>
</div>

<style lang="scss">
	.our-story {
		position: relative;
		min-height: 100vh;
		display: grid;
		grid-template-columns: 2fr 3fr 2fr;
		background-color: black;
		background: url('/img/home/moontrees.jpg') no-repeat center transparent;
		background-size: cover;
		@media (max-width: 800px) {
			display: flex;
			flex-direction: column;
			min-height: 0;
			:global(.attribution) {
				display: none;
			}
		}
	}
	.panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 150rem 100rem;
		text-align: justify;
		background-color: rgba(0, 0, 0, 0.8);
		@media (max-width: 1000px) {
			padding: 100rem 50rem;
			// text-align: left;
		}
		@media (max-width: 450px) {
			padding: 50rem 25rem;
			font-size: 17rem;
		}
	}
	h2 {
		text-align: center;
	}
	.text {
		margin: 0 auto;
		max-width: 500rem;
		-ms-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		font: 23rem/1.5 var(--font);
		.account {
			text-decoration: none;
		}
		.svg {
			display: inline-block;
			width: 19rem;
			margin-top: -4rem;
			line-height: 19rem;
			vertical-align: middle;
		}
		.handle {
			text-decoration: underline;
		}
	}
	.divider {
		width: 50rem;
		margin: 0 auto 40rem;
		color: var(--red-4);
		&.end {
			margin: 40rem auto 0;
		}
	}
	.line {
		max-width: 60%;
		height: 3rem;
		margin: 20rem auto;
		background-color: var(--red-4);
	}
	.invite {
		display: flex;
		justify-content: center;
		margin: 0 0 25rem;
	}
</style>
