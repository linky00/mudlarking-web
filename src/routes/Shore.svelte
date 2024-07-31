<script lang="ts">
    import { onMount } from "svelte";
    import ShoreItem from "./ShoreItem.svelte";

    type ShoreItem = {
        item: Item,
        x: number,
        y: number,
        squashedText: string;
    }

    const LINE_HEIGHT_PX = 16;

    export let shore: Shore;

    function fixCanvasScaling(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        const dpr = window.devicePixelRatio;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);

        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
    }

    function renderText(ctx: CanvasRenderingContext2D, shoreItems: ShoreItem[]) {
        shoreItems.forEach(shoreItem => {
            ctx.font = '16px EB Garamond';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillStyle = 'black';
            ctx.fillText(shoreItem.squashedText, shoreItem.x, shoreItem.y);
        });
    }

    let shoreItems: ShoreItem[] = shore.contents.map(item => ({
        item,
        x: Math.round(item.offset),
        y: item.line * LINE_HEIGHT_PX,
        squashedText: item.text.replaceAll(" ", "")
    }));

    onMount(() => {
        const canvas = <HTMLCanvasElement> document.querySelector(".shore");
        if (canvas != null) {
            const ctx = canvas.getContext("2d");
            if (ctx != null) {
                fixCanvasScaling(canvas, ctx);
                renderText(ctx, shoreItems);
            };
        };
    })

</script>

<div class="shore-wrapper">
    <canvas class="shore" width="1000px" height="1200px"></canvas>
</div>

<style>
    .shore-wrapper {
        overflow-y: scroll;
        padding: 0 30px 0 0;
    }
</style>