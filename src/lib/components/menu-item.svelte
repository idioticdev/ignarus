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

<style lang="scss" global>
    .menu-item {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;

        + .menu-item {
            margin-top: 12px;
        }

        > .link {
            color: var(--color-foreground);
            width: 100%;
            display: flex;
            padding: 0.6em 1.2em;
            border: none;
            border-radius: var(--radius);
            font-weight: 300;
            cursor: pointer;
            background-position-x: 0;
            background-size: 200%;
            background-image: linear-gradient(
                to right,
                transparent 0,
                transparent 50%,
                var(--color-border) 50%,
                var(--color-border) 100%
            );

            transition: background 300ms ease-in-out;

            &:hover {
                text-decoration: none;
                background-position-x: -100%;
            }
        }
    }
</style>
