<script lang="ts">
    export let title: string
    export let description: string
</script>

<section class="empty-state">
    {#if title}<h1 class="title">{title}</h1>{/if}
    {#if description}<p>{description}</p>{/if}
</section>

<style>
    .empty-state {
        text-align: center;
    }

    .empty-state > .title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
</style>
