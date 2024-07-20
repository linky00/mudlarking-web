<script lang="ts">
    import ShoreItem from './ShoreItem.svelte';

    export let shore: Shore;
    let splitContents = []
    for (let i = 0; i < shore.contents.length; i += shore.width) {
        splitContents.push(shore.contents.slice(i, i + shore.width));
    }
</script>

<div class="shore">
    {#each splitContents as row}
        <div class="row" >
            {#each row as item}
                <ShoreItem {item} />
            {/each}
        </div>
    {/each}
</div>


<style>
    .shore {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        padding: 0 30px 0;
    }

    .row {
        display: flex;
    }
</style>