<script lang="ts">
    import BagItem from "./BagItem.svelte";
    import { bag, poem } from "./stores";
</script>

<div class="inventory">
    <p>{$poem + ($poem.split("\n").at(-1) == "" ? "..." : " ...")}</p>
    <ul>
        {#each $bag as item (item.id)}
            <BagItem {item} />
        {/each}
        <li><button on:click={() => $poem += ","}>(,)</button></li>
        <li><button on:click={() => $poem += "."}>(.)</button></li>
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
    }
</style>