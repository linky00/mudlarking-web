<script lang="ts">
    import InventoryItem from "./InventoryItem.svelte";
    import { inventory } from "$lib/stores";

    export let writingPoem = false;
</script>

<ul>
    {#each $inventory as item (item.id)}
        <InventoryItem {item} {writingPoem} />
    {/each}
</ul>