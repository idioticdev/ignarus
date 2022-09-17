<script lang="ts">
    import { supabase } from '$lib/services/supabase'
    import { user } from '$lib/stores/user-store'

    const on_sign_in = () => {
        supabase.auth.signIn({
            provider: 'github'
        })
    }

    const on_sign_out = () => {
        supabase.auth.signOut()
    }
</script>

{#if $user}
    <button on:click={on_sign_out}>Sign out</button>
{:else}
    <button on:click={on_sign_in}>Sign in</button>
{/if}
