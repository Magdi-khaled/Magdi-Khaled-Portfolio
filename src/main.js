import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/stylesheets/style.css';
import App from './App.vue';
import router from './routes/router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
