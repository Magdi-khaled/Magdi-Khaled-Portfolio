import { defineStore } from 'pinia';

const useAuhStore = defineStore('Contact', {
    state: () => ({
        mail: {
            from: '',
            messaege: ''
        }
    }),
    actions: {

    },
    getters: {

    }
});
export default useAuhStore;