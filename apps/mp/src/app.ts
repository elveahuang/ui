import { createApp, App as VueApp } from 'vue';
import './app.css';

const App: VueApp<Element> = createApp({
    onShow(): void {},
});

export default App;
