<script>
    import Auth from './auth.svelte'
    import { user } from '$lib/stores/user-store'
</script>

<header class="header-panel">
    <a class="brand" href="/"><b>Ignarus</b></a>
    <div class="navigation">
        {#if $user}
            <a href="/dashboard">Dashboard</a>
            <a href="/settings">Settings</a>
        {/if}
        <Auth />
    </div>
</header>

<style>
    .header-panel {
        grid-column: 1 / 6;
        grid-row: 1 / 4;
        height: var(--header-height);
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 0 1fr 1fr 0;
        align-items: center;
        border-bottom: solid 1px rgba(255, 255, 255, 0.1);
    }

    .header-panel > .brand {
        grid-column: 2;
        color: var(--color-primary);
        text-decoration: none;
    }

    .header-panel > .brand:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .header-panel > .navigation {
        grid-column: 3;
        justify-self: end;
    }
</style>
