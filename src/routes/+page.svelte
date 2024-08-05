<script lang="ts">
    import Home from '$lib/home/Home.svelte';
    import Mudlarking from '$lib/mudlarking/Mudlarking.svelte';

    let mudlarking = false;
</script>

<svelte:head>
    <title>Mudlarking</title>
</svelte:head>

{#if mudlarking}
<Mudlarking />
{:else}
<Home />
{/if}