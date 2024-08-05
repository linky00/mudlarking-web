<script lang="ts">
    import { bag } from "./stores";

    export let item: Item;

    let dropWarning = false;
</script>

{#if !dropWarning}
<li><button on:click={() => dropWarning = true}>{item.text}</button></li>
{:else}
<li>
    Drop '{item.text}'?
    <button on:click={() => $bag = $bag.filter(bagItem => bagItem.id != item.id)}>Yes</button>
    /
    <button on:click={() => dropWarning = false}>No</button>
</li>
{/if}

<style>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
    }
</style>