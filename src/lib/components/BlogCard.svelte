<script lang="ts">
import { formatDate } from "$lib/utils.js";
    import { title, description, url } from "$lib/config";
    export let post;
</script>
    
    <svelte:head>
        <title>{title}</title>
    
        <meta name="description" content={description} />
    
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${url}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content="/blog-banner.webp" />
    
        <meta name="twitter:site" content="@McBride1105" />
        <meta name="twitter:creator" content="@McBride1105" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="/blog-banner.webp" />
        <meta name="twitter:widgets:new-embed-design" content="on" />
    
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
    </svelte:head>
    
    {#key post.slug}
        <a class="card card-hover overflow-hidden w-full max-w-4xl mt-4 mx-4" href={`/blog/${post.slug}`}>
            <header class="mb-4">
                {#if post.image}
                    <img src={post.image} alt="blog banner" />
                {/if}
            </header>
    
            <div class="p-4 space-y-4">
                <h3 class="text-2xl font-bold mb-2" data-toc-ignore style="font-family: 'Bohgaku', sans-serif;">{post.title}</h3>
                <article>
                    <p class="text-base" style="font-family: 'Cascadia Code', monospace;">
                        {post.description}
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-end items-center">
                <small>On {formatDate(post.date)}</small>
            </footer>
        </a>
    {/key}
    