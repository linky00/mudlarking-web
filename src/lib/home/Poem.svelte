<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { poem, selectedItems } from "./stores";
    import { inventory, poems } from "$lib/stores";

    const dispatch = createEventDispatcher();

    function pushPoem() {
        const trimmedPoem = $poem.trim();
        if (trimmedPoem == "") { return }
        $inventory = $inventory.filter(item => !(item.id in $selectedItems));
        $poem = "";
        $poems = [...$poems, trimmedPoem];
        dispatch('done');
    }

    function cancelPoem() {
        $selectedItems = [];
        $poem = "";
        dispatch('done');
    }
</script>

<div class="poem">
    <p>{$poem + ($poem.split("\n").at(-1) == "" ? "..." : " ...")}</p>
    <div class="punctuation">
        <button on:click={() => $poem += ","}>,</button>
        <button on:click={() => $poem += "."}>.</button>
        <button on:click={() => $poem += "\n"}>newline</button>
    </div>
    <button on:click={pushPoem} disabled={$poem.trim() == ""}>Finish poem</button>
    <button on:click={cancelPoem}>Cancel</button>
</div>


<style>
    p {
        white-space: pre;
    }

    .poem {
        display: flex;
        flex-direction: column;
        gap: 5px;
        overflow-y: auto;
        padding: 40px;
    }

    .punctuation {
        display: flex;
        gap: 5px;
    }
</style>