<script lang="ts">
    import { poem, selectedItems } from "./stores";

    export let item: Item;
    export let writingPoem = false;

    function chosen() {
        $selectedItems = [...$selectedItems, item.id];
        $poem += $poem.split("\n").at(-1) == "" ? item.text : " " + item.text;
    }
    
</script>

{#if item.id in $selectedItems == false}
    <button on:click={chosen} disabled={!writingPoem}>{item.text}</button>
{/if}

<style>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
    }
</style>