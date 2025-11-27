<script lang="ts">
	import BlogCard from "$lib/components/BlogCard.svelte";
	import { title, url } from "$lib/config";
	export let data;
</script>

<svelte:head>
	<title>{data.category} - {title}</title>
	<meta name="description" content={`Posts in the ${data.category} category`} />
	<link rel="canonical" href={`${url}/blog/categories/${data.category}`} />
</svelte:head>

<main class="mb-16 px-4">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
			Category: {data.category}
		</h1>
		<p class="text-gray-600 dark:text-gray-400 mb-8">
			{data.posts.length} {data.posts.length === 1 ? "post" : "posts"} in this category
		</p>

		{#if data.posts.length > 0}
			<section class="mb-16">
				<ul class="flex flex-col items-center">
					{#each data.posts as post}
						<BlogCard {post} />
					{/each}
				</ul>
			</section>
		{:else}
			<div class="text-center py-12">
				<p class="text-gray-600 dark:text-gray-400 text-lg">
					No posts found in this category.
				</p>
				<a href="/blog" class="text-blue-500 hover:underline mt-4 inline-block">
					View all posts
				</a>
			</div>
		{/if}
	</div>
</main>

