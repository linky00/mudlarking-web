<script lang="ts">
    import { poems } from "$lib/stores";
</script>

<div>
    {#each $poems.toReversed() as poem}
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
</style>