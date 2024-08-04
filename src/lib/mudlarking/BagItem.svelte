<script lang="ts">
    import { bag, poem } from "./stores";

    export let item: Item;

    function chosen() {
        $bag = $bag.filter((testItem) => testItem.id != item.id);
        $poem += $poem.split("\n").at(-1) == "" ? item.text : " " + item.text;
    }
</script>

<li><button on:click={chosen}>{item.text}</button></li>

<style>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
    }
</style>