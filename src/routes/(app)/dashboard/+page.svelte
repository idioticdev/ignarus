<script lang="ts">
    import { user } from '$lib/stores/user-store'
    import Grid from '$lib/components/grid.svelte'
</script>

<Grid>
    <h1>Hello {$user?.email ?? 'Hacker'}</h1>
    <p>
        There is still nothing to see here. I'm encourage by your curiousity.
        Check back later for changes if you dare.
    </p>
</Grid>
