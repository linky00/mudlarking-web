<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import Shore from './Shore.svelte';
    import Bag from './Bag.svelte';
    import { bag } from './stores';
    import { inventory } from '$lib/stores';

    let shoreData: ShoreData;

    onMount(async () => {
        const response = await fetch('/shore');
        shoreData = await response.json();
    });

    onDestroy(() => {
        $inventory = [...$bag, ...$inventory];
        $bag = [];
    })
</script>

<div class="flex">
    <Shore {shoreData} />
    <div>
        <Bag on:done />
    </div>
</div>

<style>
    .flex {
        display: flex;
        height: 100vh;
        gap: 20px;
    }
</style>