import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/stylesheets/style.css';
import App from './App.vue';
import router from './routes/router';

// AOS - Fading
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
const pinia = createPinia();

// Call AOS
AOS.init({
    duration: 800,
    once: true,
});

app.use(pinia);
app.use(router);

app.mount('#app');
