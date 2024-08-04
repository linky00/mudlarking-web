<script lang="ts">
    import { onMount } from 'svelte';
    import Shore from './Shore.svelte';
    import Bag from './Bag.svelte';

    let shoreData: ShoreData;
    let shore: Shore;

    onMount(async () => {
        const response = await fetch('/shore');
        shoreData = await response.json();
        shore.init(shoreData);
    });
</script>

<div class="flex">
    <Shore bind:this={shore} />
    <Bag />
</div>

<style>
    .flex {
        display: flex;
        height: 100vh;
    }
</style>