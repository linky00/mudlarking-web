<script lang="ts">
    import { inventory, poem } from "./stores";

    export let item: Item;

    function chosen() {
        $inventory = $inventory.filter((testItem) => testItem.id != item.id);
        $poem += item.text + " ";
    }
</script>

<li><button on:click={chosen}>{item.text}</button></li>

<style>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        font-family: serif;
        font-size: medium;
    }
</style>