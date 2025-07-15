import { createPinia } from 'pinia';
import { App as VueApp, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './app.css';

const routes = [];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const App: VueApp<Element> = createApp({
    onShow(): void {},
});
App.use(createPinia());
App.use(router);

export default App;
