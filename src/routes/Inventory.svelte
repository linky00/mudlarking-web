<script lang="ts">
    import InventoryItem from "./InventoryItem.svelte";
    import { inventory, poem } from "./stores";
</script>

<div class="inventory">
    <p>{$poem + " ..."}</p>
    <ul>
        {#each $inventory as item (item.id)}
            <InventoryItem {item} />
        {/each}
        <li><button on:click={() => $poem += ", "}>(,)</button></li>
        <li><button on:click={() => $poem += ". "}>(.)</button></li>
        <li><button on:click={() => $poem += "\n"}>(newline)</button></li>
    </ul>
</div>


<style>
    .inventory {
        overflow-y: auto;
        padding: 40px;
    }

    p {
        white-space: pre;
    }

    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        font-family: serif;
        font-size: medium;
    }
</style>