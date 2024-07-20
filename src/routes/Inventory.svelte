<script lang="ts">
    import InventoryItem from "./InventoryItem.svelte";
    import { inventory, poem } from "./stores";
</script>

<div class="inventory">
    <p>{$poem.length != 0 ? $poem : "..."}</p>
    <ul>
        {#each $inventory as item (item.id)}
            <InventoryItem {item} />
        {/each}
    </ul>
</div>


<style>
    .inventory {
        overflow-y: auto;
        padding: 40px;
    }
</style>