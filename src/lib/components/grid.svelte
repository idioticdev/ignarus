<script lang="ts">
    export let tag: string = 'section'
    export let place: 'left' | 'right' | 'center' = 'center'

    $: classes = `grid-${tag} -${place}`
</script>

<svelte:element this={tag} class={classes}>
    <slot />
</svelte:element>

<style>
    :global([class^='grid-']) {
        border-radius: var(--radius);
        grid-row: 2;
    }

    :global(.grid-section.-center) {
        place-self: center;
        grid-column: 3;
        width: 100%;
        height: 100%;
    }

    :global(.grid-aside.-left) {
        grid-column: 2;
    }

    :global(.grid-aside.-right) {
        grid-column: 4;
    }
</style>
