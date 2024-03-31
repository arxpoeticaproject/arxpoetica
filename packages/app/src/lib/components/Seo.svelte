<script lang="ts">
	let {
		title = 'Arx Poetica',
		description = 'Arx Poetica is an intentional collective of global artists connected through today’s online renaissance.',
		url = '/',
		image = '/img/home/og-index.jpg',
		type = 'website',
	} = $props()
</script>

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={image} />
