<script lang="ts">
    export let heading = false
</script>

<li class="menu-item">
    <svelte:element
        this={heading ? 'h3' : 'a'}
        class:heading
        class:link={!heading}
    >
        <slot />
    </svelte:element>
</li>

<style lang="scss">
    .menu-item {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;

        > .link {
            color: var(--color-foreground);
            width: 100%;
            display: flex;
            padding: 0.6em 1.2em;
            border: solid 2px transparent;
            border-radius: var(--radius);
            font-weight: 300;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                text-decoration: none;
                box-shadow: inset 0 0 0 2px var(--color-border);
            }
        }
    }
</style>
