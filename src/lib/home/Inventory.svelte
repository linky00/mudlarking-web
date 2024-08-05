<script lang="ts">
    import InventoryItem from "./InventoryItem.svelte";
    import { inventory } from "$lib/stores";

    export let writingPoem = false;
</script>

<div>
    <ul>
        {#each $inventory as item (item.id)}
            <InventoryItem {item} {writingPoem} />
        {/each}
    </ul>
</div>

<style>
    div {
        overflow-y: auto;
    }
</style>