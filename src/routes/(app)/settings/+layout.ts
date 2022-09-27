import type { LayoutLoad } from '../../../../.svelte-kit/types/src/routes/(app)/settings/$types'

export const load: LayoutLoad = () => {
    return {
        sections: [
            { path: '/settings', title: 'Settings' },
            { path: '/settings/profile', title: 'Profile' }
        ]
    }
}
