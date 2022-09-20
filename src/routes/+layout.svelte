<script lang="ts">
    import '$lib/styles/main.scss'
    import { user } from '$lib/stores/user-store'
    import { supabase } from '$lib/services/supabase'
    import { goto } from '$app/navigation'
    import AppHeader from '$lib/components/app-header.svelte'

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_OUT') {
            await goto('/goodbye')
        }

        if (event === 'SIGNED_IN') {
            await goto('/dashboard')
        }

        user.set(session?.user ?? null)
    })
</script>

<div class="main-layout">
    <AppHeader />
    <slot />
</div>

<style>
    .main-layout {
        display: grid;
        grid-gap: 12px;
        grid-template-columns: 0 1fr 0;
        grid-template-rows: var(--header-height) 1fr auto;
        height: 100vh;
    }

    @media (min-width: 768px) {
        .main-layout {
            grid-gap: 12px;
            grid-template-columns: 0 300px 1fr 300px 0;
            grid-template-rows: var(--header-height) 1fr auto;
        }
    }
</style>
