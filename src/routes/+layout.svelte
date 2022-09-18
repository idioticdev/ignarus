<script lang="ts">
    import '$lib/styles/main.scss'
    import { user } from '$lib/stores/user-store'
    import { supabase } from '$lib/services/supabase'
    import { goto } from '$app/navigation'
    import AppHeader from '$lib/components/app-header.svelte'
    import Grid from '$lib/components/grid.svelte'

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((event, session) => {
        user.set(session?.user ?? null)
        if (event === 'SIGNED_OUT') {
            goto('/goodbye')
        }
    })
</script>

<div class="main-layout">
    <AppHeader />
    {#if $user}
        <Grid>
            <h1>Hello {$user.email}</h1>
            <p>
                There is still nothing to see here. I'm encourage by your
                curiousity. Check back later for changes if you dare.
            </p>
        </Grid>
    {:else}
        <slot />
    {/if}
</div>

<style>
    .main-layout {
        display: grid;
        grid-gap: 12px;
        grid-template-columns: 0 300px 1fr 300px 0;
        grid-template-rows: var(--header-height) 1fr auto;
        height: 100vh;
    }
</style>
