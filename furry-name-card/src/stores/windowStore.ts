import { defineStore } from 'pinia'

interface WindowState {
    descriptionOpen: boolean;
}

export const useWindowStore = defineStore('window', {
    state: (): WindowState => ({
        descriptionOpen: false,
    }),
    actions: {
        toggleDescription() {
            this.descriptionOpen = !this.descriptionOpen;
        },
    },
})