
<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    import type { LayoutData } from './$types'; // Import the type for 'data'
    import type { Snippet } from 'svelte';

    // Combine 'data' (for session info) and 'children' (formerly slot)
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<!-- Now you can use data.session here, e.g. <Navbar session={data.session} /> -->

{@render children()}


