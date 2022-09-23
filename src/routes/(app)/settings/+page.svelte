<script>
    import Grid from '$lib/components/grid.svelte'
    import Menu from '$lib/components/menu.svelte'
    import MenuItem from '$lib/components/menu-item.svelte'
</script>

<Grid place="left">
    <Menu>
        <MenuItem heading={true}>Settings</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Danger</MenuItem>
    </Menu>
</Grid>
<Grid><h1>Settings</h1></Grid>
