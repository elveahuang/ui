import App from '@/App.vue';
import { setup } from '@/utils';
import { log } from '@commons/core/utils';
import '@commons/webapp/theme/default.css';
import { createApp } from 'vue';

setup(createApp(App)).then((): void => {
    log(`App for admin has been started.`);
});
