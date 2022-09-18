<script lang="ts">
    import { user } from '$lib/stores/user-store'
    import Empty from '$lib/components/empty.svelte'
    import Grid from '$lib/components/grid.svelte'
</script>

{#if $user}
    <slot />
{:else}
    <Grid>
        <Empty
            title="Back up, back up!"
            description="You naughty person, you must be signed in to view this page."
        />
    </Grid>
{/if}
