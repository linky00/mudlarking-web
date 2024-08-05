<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";

    import Poem from "./Poem.svelte";
    import Inventory from "./Inventory.svelte";
    import Poems from "./Poems.svelte";
    import { poem, selectedItems } from "./stores";

    const dispatch = createEventDispatcher();

    let writingPoem = false

    onDestroy(() => {
        $poem = "";
        $selectedItems = [];
    });
</script>

<div class="home">
    <div class="left">
        <button on:click={() => writingPoem = true} disabled={writingPoem}>Write poem</button>
        <button on:click={() => dispatch("done")}>Go mudlarking</button>
        <Inventory {writingPoem} />
    </div>
    {#if writingPoem}
    <Poem on:done={() => writingPoem = false} />
    {/if}
    <Poems />
</div>


<style>
    .home {
        display: flex;
        padding: 20px;
        gap: 10px;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>