<script lang="ts">
    import type { Writable } from "svelte/store";
    import { inventory } from "$lib/stores";

    export let item: Item;
    export let poem: Writable<string>;

    function chosen() {
        $inventory = $inventory.filter((testItem) => testItem.id != item.id);
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