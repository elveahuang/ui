import { setupApp } from '@/utils';
import { App as VueApp, createApp } from 'vue';
import './app.css';

const App: VueApp<Element> = createApp({
    onShow(): void {},
});
setupApp(App).then();

export default App;
