<script lang="ts">
    import { z } from 'zod'
    import { user } from '$lib/stores/user-store'
    import { supabase } from '$lib/services/supabase'
    import { onMount } from 'svelte'

    let form: HTMLFormElement

    const form_schema = z.object({
        first_name: z.string().min(1).max(255),
        last_name: z.string().min(1).max(255)
    })

    const on_save = async () => {
        const data = Object.fromEntries(new FormData(form).entries())
        const result = form_schema.safeParse(data)

        if (result.success) {
            const { data: profile, error } = await supabase
                .from('profiles')
                .update(result.data)
                .eq('id', $user?.id)

            if (error) console.log(error.message)
        } else {
            console.log(result.error)
        }
    }

    const get_profile = async () => {
        const { data: profile, error } = await supabase
            .from('profiles')
            .select()
            .eq('id', $user?.id)

        if (error) console.log(error.message)
        else {
            form.first_name.value = profile[0].first_name
            form.last_name.value = profile[0].last_name
        }
    }

    onMount(async () => {
        await get_profile()
    })
</script>

<h2>Profile</h2>
<form bind:this={form}>
    <label for="first_name" id="first_name">First Name</label>
    <input
        type="text"
        name="first_name"
        placeholder="First Name"
        aria-labelledby="first_name"
    />
    <label for="last_name" id="last_name">Last Name</label>
    <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        aria-labelledby="last_name"
    />
    <button on:click|preventDefault={on_save}>Save</button>
</form>
