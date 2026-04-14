import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
    compatibilityDate: '2026-04-01',
    modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@comark/nuxt', '@nuxthub/core', '@comark/nuxt'],
    devtools: { enabled: true },
    css: [resolve(__dirname, 'app/assets/css/main.css')],
    content: {
        database: {
            type: 'postgresql',
            url: process.env.POSTGRES_URL as string,
        },
    },
    runtimeConfig: {
        deepseekApiKey: '',
    },
    fonts: {
        provider: 'bunny',
    },
    sourcemap: { client: 'hidden' },
    ssr: true,
    icon: {
        serverBundle: {
            collections: ['mdi'],
        },
    },
    hub: {
        db: 'postgresql',
    },
    vite: {
        optimizeDeps: {
            include: ['@ai-sdk/vue', '@comark/vue'],
        },
    },
    nitro: {
        prerender: {
            crawlLinks: false,
        },
    },
});
