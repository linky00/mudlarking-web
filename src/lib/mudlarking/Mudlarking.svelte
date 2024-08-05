<script lang="ts">
    import { onMount } from 'svelte';
    import Shore from './Shore.svelte';
    import Bag from './Bag.svelte';

    let shoreData: ShoreData;

    onMount(async () => {
        const response = await fetch('/shore');
        shoreData = await response.json();
    });
</script>

<div class="flex">
    <Shore {shoreData} />
    <Bag />
</div>

<style>
    .flex {
        display: flex;
        height: 100vh;
    }
</style>