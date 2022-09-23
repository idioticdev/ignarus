<script lang="ts">
    import Auth from './auth.svelte'
    import { user } from '$lib/stores/user-store'
    import { browser } from '$app/environment'
    import { page } from '$app/stores'

    let nav: HTMLElement
    let header: HTMLElement
    let is_mobile_nav_open = false

    const routes = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Settings', path: '/settings' }
    ]

    $: path = $page.url.pathname

    const hoist_nav = () => {
        if (browser) {
            const main = document.querySelector('.main-layout')!
            main.insertAdjacentElement('afterbegin', nav)?.animate(
                [
                    { transform: 'scale(0)', opacity: 0 },
                    { transform: 'scale(1)', opacity: 1 }
                ],
                {
                    duration: 300,
                    easing: 'ease-in-out'
                }
            )
            is_mobile_nav_open = true
        }
    }

    const return_nav = () => {
        if (browser && is_mobile_nav_open) {
            nav.animate(
                [
                    { transform: 'scale(1)', opacity: 1 },
                    { transform: 'scale(0)', opacity: 0 }
                ],
                {
                    duration: 300,
                    easing: 'ease-in-out'
                }
            ).onfinish = () => {
                header.appendChild(nav)
                is_mobile_nav_open = false
            }
        }
    }
</script>

<header class="main-header" bind:this={header}>
    <div class="brand">
        <a href="/"><b>Ignarus</b></a>
    </div>
    <div class="main-nav" bind:this={nav} on:click={return_nav}>
        {#if $user}
            {#each routes as route}
                <a href={route.path} class:active={path === route.path}
                    >{route.name}</a
                >
            {/each}
        {/if}
        <Auth />
    </div>
    <div class="menu">
        <button on:click={hoist_nav}>Menu</button>
    </div>
</header>

<style lang="scss" global>
    .main-header {
        grid-column: 1 / 4;
        grid-row: 1 / 4;
        height: var(--header-height);
        display: grid;
        grid-gap: 12px;
        grid-template-columns: 0 auto 1fr 0;
        align-items: center;
        border-bottom: solid 1px var(--color-border);

        a {
            color: var(--color-foreground);
        }

        @media (min-width: 768px) {
            grid-column: 1 / 6;
            grid-row: 1 / 4;
            grid-gap: 20px;
            grid-template-columns: 0 1fr 1fr 0;
        }

        & > .brand {
            grid-column: 2;
        }

        & > .menu {
            display: block;
            grid-column: 3;
            justify-self: end;

            @media (min-width: 768px) {
                display: none;
            }
        }
    }

    .main-nav {
        display: none;

        @media (min-width: 768px) {
            display: block;
            z-index: initial;
            grid-column: 3;
            justify-self: end;

            > a {
                margin-right: 20px;

                &.active {
                    color: var(--color-primary);
                }
            }
        }
    }

    .main-layout > .main-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 0;
        transform-origin: top right;
        background: var(--color-secondary);
        z-index: 1;
        border-radius: var(--radius);

        > *:not([button]) {
            padding: 1em;
        }
    }
</style>
