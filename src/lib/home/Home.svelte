<script lang="ts">
    import Poem from "./Poem.svelte";
    import Inventory from "./Inventory.svelte";
    import Poems from "./Poems.svelte";

    let writingPoem = false
</script>

<div class="home">
    <div>
        <button on:click={() => writingPoem = true} disabled={writingPoem}>Write poem</button>
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
</style>