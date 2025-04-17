import { defineStore } from 'pinia';
import axios from 'axios';

export const useContactStore = defineStore('contact', {
    state: () => ({
        name: '',
        email: '',
        message: '',
        status: null,
        loading: false,
    }),
    actions: {
        async sendEmail() {
            this.loading = true;
            try {
                const response = await axios.post('https://busy-dust-square.glitch.me/api/send-email', {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                });
                setTimeout(() => { this.loading = false; }, 2000);
                this.status = 'success';
                console.log(response.data.message);
            } catch (error) {
                setTimeout(() => { this.loading = false; }, 2000);
                this.status = 'error';
                console.error('Error sending email:', error);
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {
        getFormData() {
            return this.name && this.email && this.message;
        }
    }
});