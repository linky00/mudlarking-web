<script lang="ts">
    import type { PageData } from './$types';
    import Shore from './Shore.svelte';
    import Inventory from './Inventory.svelte';

    export let data: PageData;
    let shore = data.shore;

</script>

<svelte:head>
    <title>Mudlarking</title>
</svelte:head>

<div class="flex">
    <Shore {shore} />
    <Inventory />
</div>

<style>
    .flex {
        display: flex;
        height: 100vh;
    }
</style>