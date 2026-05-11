import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());

    console.log(`Vite for admin. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);

    return {
        base: env.VITE_APP_BASE ?? '/',
        resolve: {
            tsconfigPaths: true,
        },
        plugins: [
            vue(),
            tailwindcss(),
            VueI18n({ runtimeOnly: false }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon',
                        enabledCollections: ['ep', 'mdi', 'ant-design', 'ion'],
                    }),
                ],
                dts: resolve(__dirname, 'src/types/components.d.ts'),
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
                dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
            }),
            Icons(),
        ],
        server: {
            host: env.VITE_HOST ?? '0.0.0.0',
            port: Number.parseInt(env.VITE_PORT ?? 8083),
        },
    };
});
