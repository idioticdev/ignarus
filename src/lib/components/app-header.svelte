<script>
    import Auth from './auth.svelte'
    import { user } from '$lib/stores/user-store'
</script>

<header class="header-panel">
    <div class="brand">
        <a href="/"><b>Ignarus</b></a>
    </div>
    <div class="navigation">
        {#if $user}
            <a href="/dashboard">Dashboard</a>
            <a href="/settings">Settings</a>
        {/if}
        <Auth />
    </div>
</header>

<style lang="scss">
    .header-panel {
        grid-column: 1 / 6;
        grid-row: 1 / 4;
        height: var(--header-height);
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 0 1fr 1fr 0;
        align-items: center;
        border-bottom: solid 1px var(--color-border);

        & > .navigation {
            grid-column: 3;
            justify-self: end;
        }

        & > .brand {
            grid-column: 2;
        }
    }
</style>
