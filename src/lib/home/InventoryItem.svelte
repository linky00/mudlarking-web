<script lang="ts">
    import { poem, selectedItems } from "./stores";

    export let item: Item;
    export let writingPoem = false;

    function chosen() {
        $selectedItems = [...$selectedItems, item];
        $poem += $poem.split("\n").at(-1) == "" ? item.text : " " + item.text;
    }
    
</script>

{#if !$selectedItems.includes(item)}
    <li><button on:click={chosen} disabled={!writingPoem}>{item.text}</button></li>
{/if}

<style>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
    }

    button:disabled {
        color: inherit;
    }
</style>