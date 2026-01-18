import App from '@/App.vue';
import { setup } from '@/utils';
import { log } from '@commons/core/utils';
import '@commons/mobile/theme/default.css';
import { createApp } from 'vue';

setup(createApp(App)).then((): void => {
    log(`App for mobile has been started.`);
});
