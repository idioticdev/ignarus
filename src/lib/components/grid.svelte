<script lang="ts">
    export let place: 'left' | 'right' | 'center' = 'center'

    $: tag = 'center' ? 'section' : 'aside'
    $: classes = `grid -${place}`
</script>

<svelte:element this={tag} class={classes}>
    <slot />
</svelte:element>

<style lang="scss" global>
    .grid {
        border-radius: var(--radius);
        grid-row: 2;

        &.-center {
            place-self: center;
            grid-column: 2;
            width: 100%;
            height: 100%;

            @media (min-width: 768px) {
                grid-column: 3;
            }
        }

        &.-left {
            grid-column: 2;
        }
        &.-right {
            grid-column: 4;
        }
    }
</style>
