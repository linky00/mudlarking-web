<script lang="ts">
    import { Canvas } from 'svelte-canvas';
    import ShoreItem from './ShoreItem.svelte';

    export let shore: Shore;

    let canvas: Canvas;
    $: context = canvas?.getContext();
</script>

<div class="shore">
    <Canvas bind:this={canvas} height={1200} layerEvents>
        {#each shore.contents as item}
        <ShoreItem {context} {item} />
        {/each}
    </Canvas>
</div>

<style>
    .shore {
        width: 1000px;
        overflow-y: scroll;
        padding: 0 30px 0;
    }
</style>