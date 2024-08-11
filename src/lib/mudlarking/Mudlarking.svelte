<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import Shore from './Shore.svelte';
    import Bag from './Bag.svelte';
    import { bag } from './stores';
    import { inventory } from '$lib/stores';

    export let hasDebug = false;

    let shoreData: ShoreData;
    let viewDebug = false;

    onMount(async () => {
        const response = await fetch('/shore?' + new URLSearchParams({debug: `${hasDebug}`}).toString());
        shoreData = await response.json();
    });

    onDestroy(() => {
        $inventory = [...$bag, ...$inventory];
        $bag = [];
    })
</script>

<div class="flex">
    <Shore {shoreData} {viewDebug} />
    <div>
        <Bag on:done />
    </div>
    {#if hasDebug}
        <div>
            <button on:click={() => {viewDebug = !viewDebug}}>Toggle debug</button>
        </div>
    {/if}
</div>

<style>
    .flex {
        display: flex;
        height: 100vh;
        gap: 20px;
    }
</style>