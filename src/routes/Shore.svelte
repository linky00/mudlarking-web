<script lang="ts">
    import { Canvas } from 'svelte-canvas';
    import ShoreItem from './ShoreItem.svelte';

    export let shore: Shore;
    // let splitContents = []
    // for (let i = 0; i < shore.contents.length; i += shore.width) {
    //     splitContents.push(shore.contents.slice(i, i + shore.width));
    // }

    let canvas: Canvas;
    $: context = canvas?.getContext();
</script>

<Canvas bind:this={canvas} width={1000} layerEvents>
    <ShoreItem {context} item={shore.contents[0]} />
</Canvas>

<!-- <div class="shore">
    {#each splitContents as row}
        <div class="row" >
            {#each row as item}
                <ShoreItem {item} />
            {/each}
        </div>
    {/each}
</div> -->


<!-- <style>
    .shore {
        overflow-y: scroll;
        padding: 0 30px 0;
    }
</style> -->