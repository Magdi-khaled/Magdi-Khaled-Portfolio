import { defineStore } from 'pinia';
import axios from 'axios';
export const useContactStore = defineStore('Contact', {
    state: () => ({
        name: '',
        email: '',
        message: '',
        subject: '',
        status: null,
        loading: false,
    }),
    actions: {
        async sendEmail() {
            this.loading = true;
            try {
                const response = await axios.post('http://localhost:3000/api/send-email', {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
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
            return this.name && this.email && this.subject && this.message;
        }
    }
});