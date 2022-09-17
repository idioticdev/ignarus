<script lang="ts">
    import '$lib/styles/main.scss'
    import { user } from '$lib/stores/user-store'
    import { supabase } from '$lib/services/supabase'
    import Auth from '$lib/components/auth.svelte'

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user ?? null)
    })
</script>

<Auth />
{#if $user}
    <h1>Hello {$user.email}</h1>
    <p>
        There is still nothing to see here. I'm encourage by your curiousity.
        Check back later for changes if you dare.
    </p>
{:else}
    <slot />
{/if}
