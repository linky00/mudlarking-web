<script lang="ts">
    import { Layer } from 'svelte-canvas';

    export let item: ShoreItemData;

    $: render = ({ context: ctx }) => {
        if (item.collected == true) {
            return
        }
        ctx.font = '16px EB Garamond';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'black';
        let textMetrics = ctx.measureText(item.squashedText);
        ctx.fillText(item.squashedText, item.x, item.y);
        item.x2 = item.x + textMetrics.actualBoundingBoxRight;
    }
</script>

<Layer {render} />