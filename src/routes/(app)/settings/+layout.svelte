<script lang="ts">
    import Grid from '$lib/components/grid.svelte'
    import Menu from '$lib/components/menu.svelte'
    import MenuItem from '$lib/components/menu-item.svelte'
    import type { LayoutData } from './$types'
    import { page } from '$app/stores'

    export let data: LayoutData
</script>

<Grid place="left">
    <Menu>
        {#each data.sections as section}
            <MenuItem
                to={section.path}
                active={$page.url.pathname.startsWith(section.path)}
            >
                {section.title}
            </MenuItem>
        {/each}
    </Menu>
</Grid>
<Grid><slot /></Grid>
