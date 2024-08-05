<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import BagItem from "./BagItem.svelte";
    import { MAX_BAG_ITEMS } from "./mudlarking";
    import { bag } from "./stores";

    const dispatch = createEventDispatcher();
</script>

<div class="bag">
    <button on:click={() => dispatch("done")}>Go home</button>
    <p>Bag can fit {MAX_BAG_ITEMS - $bag.length} more {(MAX_BAG_ITEMS - $bag.length) == 1 ? "item" : "items"}.</p>
    <ul>
        {#each $bag as item (item.id)}
            <BagItem {item} />
        {/each}
    </ul>
</div>

<style>
    .bag {
        padding: 20px;
    }

</style>