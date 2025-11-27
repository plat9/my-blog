<script lang="ts">
	import { formatDate } from "$lib/utils";
	import { url, title } from "$lib/config";
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>

	<link rel="canonical" href={`${url}${data.url}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}${data.url}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	{#if data.meta.image}
		<meta property="og:image" content={data.meta.image} />
	{/if}

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	{#if data.meta.image}
		<meta name="twitter:image:src" content={data.meta.image} />
	{/if}
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<article class="prose mb-16 mx-auto max-w-4xl px-4 pt-8 border-t border-gray-200 dark:border-gray-700">
	<!-- Title -->
	<hgroup class="flex flex-col items-center mb-8 mt-8">
		<h1 class="text-gray-900 dark:text-white text-4xl font-bold" style="font-family: 'Bohgaku', sans-serif;">{data.meta.title}</h1>
		{#if data.meta.image}
			<img src={data.meta.image} alt="blog banner" class="rounded-md my-4" />
		{/if}
		<p class="text-gray-600 dark:text-gray-400 text-sm">
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<!-- Tags -->
	{#if data.meta.categories && data.meta.categories.length > 0}
		<div class="flex flex-wrap gap-4 mb-6">
			{#each data.meta.categories as category}
				<a href={`/blog/categories/${category}`} class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm no-underline hover:bg-gray-300 dark:hover:bg-gray-600">
					#{category}
				</a>
			{/each}
		</div>
	{/if}

	<!-- Post Content -->
	<div class="prose prose-gray dark:prose-invert max-w-none" style="font-family: 'Inter', monospace;">
		<div class="space-y-6">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

