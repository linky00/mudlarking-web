<script lang="ts">
    import { inventory } from "./stores";

    export let item: Item;

    let collected = false;

    function collect() {
        if (collected == false) {
            collected = true;

            $inventory = [...$inventory, item];
        }
    }
</script>

<button on:click={collect} class:hidden={collected} >{item.text}</button>

<style>
    .hidden {
        visibility: hidden;
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