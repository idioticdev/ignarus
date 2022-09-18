<script lang="ts">
    import { onMount } from 'svelte'
    import { blur } from 'svelte/transition'
    import Grid from '$lib/components/grid.svelte'
    import Empty from '$lib/components/empty.svelte'

    let loaded = false
    onMount(() => {
        loaded = true
    })
</script>

<Grid>
    {#if loaded}
        <div in:blur>
            <Empty title="Farewell" description="You have been signed out." />
        </div>
    {/if}
</Grid>
