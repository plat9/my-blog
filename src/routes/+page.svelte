<script lang="ts">
    import { title, description, url } from "$lib/config";
</script>

<!-- SEO -->
<svelte:head>
    <title>{title}</title>

    <link rel="canonical" href={url} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={title} />

    <meta name="twitter:site" content="@YouTwitterHandle" />
    <meta name="twitter:creator" content="@YouTwitterHandle" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:widgets:new-embed-design" content="on" />

    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
    <h1 class="text-gray-900 dark:text-white text-4xl font-bold">Hi guys so my blog</h1>
    <p class="text-gray-700 dark:text-gray-300 text-lg max-w-2xl text-center">A blog to share my learning bath whatever that is.</p>
    
    <a href="/blog" class="flex justify-center items-center bg-gray-100 dark:bg-gray-800 block max-w-sm p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <span class="text-gray-900 dark:text-white font-semibold">View the blog</span>
    </a>
</main>
    