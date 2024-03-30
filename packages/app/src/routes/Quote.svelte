<script>
	import Quote from '$lib/svg/svelte/quote-bg.svelte'
</script>

<div class="quote">
	<div class="outer">
		<div class="inner">
			<figure>
				<blockquote cite="https://www.gutenberg.org/files/2398/2398-h/2398-h.htm">
					<p>
						The history of art has suffered as much as any history by trenchant and absolute
						divisions. Pagan and Christian art are sometimes harshly opposed, and the Renaissance is
						represented as a fashion which set in at a definite period. That is the superficial
						view: the deeper view is that which preserves the identity of culture.
					</p>
				</blockquote>
				<figcaption>—Walter Pater, <cite>The Renaissance</cite></figcaption>
			</figure>
			<div class="svg"><Quote /></div>
		</div>
	</div>
</div>

<style lang="scss">
	.quote {
		overflow: hidden;
		position: relative;
		padding: 150rem 25rem;
		background-color: black;
		@media (max-width: 500px) {
			padding: 20rem;
		}
	}
	.outer {
		position: relative;
		margin: 0 auto;
		max-width: 1000rem;
		// color: var(--red-4);
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: -100%;
			width: 300%;
			height: 1rem;
			background-color: var(--red-3);
			transform: rotate(-45deg);
			z-index: 0;
		}
	}
	.inner {
		display: grid;
		grid-template-columns: auto 176rem;
		grid-gap: 25rem;
		align-items: center;
		position: relative;
		background-color: black;
		padding: 25rem 0 10rem;
		@media (max-width: 800px) {
			display: block;
		}
	}
	figure {
		margin: 0;
	}
	.svg {
		width: 176rem;
		color: transparent;
		@media (max-width: 800px) {
			display: none;
		}
	}
	blockquote {
		margin: 0;
		text-align: justify;
		-ms-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		@media (max-width: 500px) {
			padding: 0 0 40rem;
			font-size: 20rem;
			text-align: center;
			font-style: normal;
			-ms-hyphens: none;
			-webkit-hyphens: none;
			hyphens: none;
		}
	}
	figcaption {
		text-align: right;
		margin-right: 50rem;
		color: white;
		font-weight: var(--light);
		opacity: 0.5;
	}
	// cite {}
</style>
