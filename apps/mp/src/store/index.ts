import { useAppStore, useAppStoreExternal } from '@/store/app';

import { createPinia } from 'pinia';
import type { App } from 'vue';

export let store: ReturnType<typeof createPinia>;

export const setupStore = async (app: App<Element>): Promise<void> => {
    store = createPinia();
    app.use(store);
};

export { useAppStore, useAppStoreExternal };
