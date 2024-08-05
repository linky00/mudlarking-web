<script lang="ts">
    import Home from '$lib/home/Home.svelte';
    import Mudlarking from '$lib/mudlarking/Mudlarking.svelte';

    let mudlarking = false;
</script>

<svelte:head>
    <title>Mudlarking</title>
</svelte:head>

{#if mudlarking}
<Mudlarking on:done={() => mudlarking = false} />
{:else}
<Home on:done={() => mudlarking = true} />
{/if}