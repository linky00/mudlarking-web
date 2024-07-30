<script lang="ts">
    import { Canvas, Layer, type Render } from 'svelte-canvas';
    import { inventory } from './stores';
    import { text } from '@sveltejs/kit';

    export let context: CanvasRenderingContext2D;
    export let item: Item;
    
    let x = 5;
    let y = 5;
    let collected = false;

    function collect() {
        if (collected == false) {
            collected = true;
            $inventory = [...$inventory, item];
            let textMetrics = context.measureText(item.text);
            context.clearRect(
                x, 
                y,
                textMetrics.actualBoundingBoxRight,
                textMetrics.actualBoundingBoxDescent
            );
        }
    }

    let render: Render;
    $: render = ({ context }) => {
        context.font = '16px Times New Roman';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillStyle = 'black';
        context.fillText(item.text, x, y);
        let textMetrics = context.measureText(item.text);
        context.fillStyle = 'transparent';
        context.fillRect(
            x, 
            y,
            textMetrics.actualBoundingBoxRight,
            textMetrics.actualBoundingBoxDescent
        );
    }
</script>

<Layer {render} on:click={collect} />