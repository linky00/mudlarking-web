<script lang="ts">
    import { Canvas } from "svelte-canvas";
    import { bag } from './stores';
    import ShoreItem from "./ShoreItem.svelte";
    import { MAX_BAG_ITEMS } from "./mudlarking";

    const LINE_HEIGHT_PX = 16;

    export let shoreData: ShoreData;
    export let viewDebug = false;

    const makeShoreItem = (item: Item) => ({
            item,
            x: Math.round(item.offset),
            y: item.line * LINE_HEIGHT_PX,
            x2: 0,
            y2: (item.line + 1) * LINE_HEIGHT_PX,
            squashedText: item.text.replaceAll(" ", ""),
            collected: false
    });

    let shoreItems: ShoreItemData[] = [];
    let debugItems: ShoreItemData[] = [];

    $: shoreItems = shoreData ? shoreData.contents.map(makeShoreItem) : [];
    $: debugItems = (shoreData && shoreData.debugContents) ? shoreData.debugContents.map(makeShoreItem) : [];

    let canvasComponent: Canvas;
    let canvas: HTMLCanvasElement;
    $: canvas = canvasComponent?.getCanvas();

    let clickHandler = (e: MouseEvent) => {
        if ($bag.length >= MAX_BAG_ITEMS) { return }
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let clickedItem = shoreItems.find(shoreItem => x > shoreItem.x && x < shoreItem.x2 && y > shoreItem.y && y < shoreItem.y2);
        if (clickedItem != null && clickedItem.collected == false) {
            clickedItem.collected = true;
            $bag = [...$bag, clickedItem.item];
        };
    };
        
</script>

<div class="shore-wrapper">
    <Canvas bind:this={canvasComponent} on:click={clickHandler} width={800} height={1200}>
        {#if viewDebug}
            {#each debugItems as item}
                <ShoreItem {item} renderDebug={true} />
            {/each}
        {:else}
            {#each shoreItems as item}
                <ShoreItem {item} />
            {/each}
        {/if}
    </Canvas>
</div>

<style>
    .shore-wrapper {
        overflow-y: scroll;
        padding: 0 30px 0 0;
    }
</style>