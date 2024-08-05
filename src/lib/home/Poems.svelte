<script lang="ts">
    import { poems } from "$lib/stores";
</script>

<div>
    {#each $poems.toReversed() as poem, index}
        {#if index != 0}
        <p>*****</p>
        {/if}
        <p>{poem}</p>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: auto;
        padding: 10px;
    }

    p {
        white-space: pre-wrap;
    }
</style>