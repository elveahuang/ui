import { createPinia } from 'pinia';
import { App as VueApp, createApp } from 'vue';
import './app.css';

const App: VueApp<Element> = createApp({
    onShow(): void {},
});
App.use(createPinia());

export default App;
