<script lang="ts">
    import { title, description, url } from "$lib/config";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
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
    <h1 class="text-gray-900 dark:text-white text-4xl font-bold">Hi guys this is my blog</h1>
    <p class="text-gray-700 dark:text-gray-300 text-lg max-w-2xl text-center">A blog to share my learning path whatever that is.</p>
    
    <a href="/blog" class="flex justify-center items-center bg-gray-100 dark:bg-gray-800 block max-w-sm p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <span class="text-gray-900 dark:text-white font-semibold">View the blog</span>
    </a>
    <!-- src/routes/+page.svelte -->
    <script lang="ts">
        import { signIn, signOut } from "@auth/sveltekit/client";
        import type { PageData } from './$types';
    
        let { data }: { data: PageData } = $props();
    </script>
    
    
        <h1 class="text-2xl font-bold mb-4">Home Page</h1>
    
        {#if data.session}
            <!-- Sign Out Button (Simple style for contrast) -->
            <button 
                onclick={() => signOut()}
                class="rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-900 hover:bg-gray-300 transition"
            >
                Sign Out
            </button>
            
            <pre class="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto max-w-lg">
                {JSON.stringify(data.session, null, 2)}
            </pre>
        {:else}
            <!-- Styled Sign In Button -->
            <button 
                onclick={() => signIn("google")}
                class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500 hover:bg-neutral-800"
            >
                <div class="translate-x-0 transition group-hover:-translate-x-[150%]">
                    Sign In with Google for nothing
                </div>
                <div class="absolute translate-x-[150%] transition group-hover:translate-x-0">
                    Sign In with Google
                </div>
            </button>
        {/if}
    
    </main>
    

