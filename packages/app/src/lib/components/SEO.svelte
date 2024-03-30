<script>
	export let title = 'Arx Poetica'
	export let description =
		'Arx Poetica is an intentional collective of global artists connected through today’s online renaissance.'
	export let url = '/'
	export let image = '/img/home/og-index.jpg'
	export let type = 'website'

	$: version =
		process.env.NODE_ENV === 'development'
			? Math.round(Math.random() * 1000000 * 1000000)
			: __VERSION__

	$: og_url = `${url}`
	$: og_image = `${image}?v=${version}`
</script>

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={og_url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={og_image} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={og_url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={og_image} />
