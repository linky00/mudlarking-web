<script lang="ts">
    import { onMount } from "svelte";
    import { inventory } from './stores';

    type ShoreItem = {
        item: Item,
        x: number,
        y: number,
        x2: number,
        y2: number,
        squashedText: string;
        collected: boolean
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
            let textMetrics = ctx.measureText(shoreItem.squashedText);
            ctx.fillText(shoreItem.squashedText, shoreItem.x, shoreItem.y);
            shoreItem.x2 = shoreItem.x + textMetrics.actualBoundingBoxRight;
            shoreItem.y2 = shoreItem.y + LINE_HEIGHT_PX;
            console.log(shoreItem);
        });
    }

    let shoreItems: ShoreItem[] = shore.contents.map(item => ({
        item,
        x: Math.round(item.offset),
        y: item.line * LINE_HEIGHT_PX,
        x2: 0,
        y2: 0,
        squashedText: item.text.replaceAll(" ", ""),
        collected: false
    }));

    onMount(() => {
        const canvas = <HTMLCanvasElement> document.querySelector(".shore");
        if (canvas != null) {
            const ctx = canvas.getContext("2d");
            if (ctx != null) {
                fixCanvasScaling(canvas, ctx);
                renderText(ctx, shoreItems);

                canvas.addEventListener("click", (e) => {
                    let rect = canvas.getBoundingClientRect();
                    let x = e.clientX - rect.left;
                    let y = e.clientY - rect.top;
                    let clickedItem = shoreItems.find(shoreItem => x > shoreItem.x && x < shoreItem.x2 && y > shoreItem.y && y < shoreItem.y2);
                    if (clickedItem != null && clickedItem.collected == false) {
                        clickedItem.collected = true;
                        $inventory = [...$inventory, clickedItem.item];
                        ctx.clearRect(
                            clickedItem.x,
                            clickedItem.y,
                            clickedItem.x2 - clickedItem.x,
                            clickedItem.y2 - clickedItem.y
                        );
                    }
                })
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