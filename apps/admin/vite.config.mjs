import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { isEmpty, isEqual, toNumber } from 'lodash-es';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import { viteVConsole } from 'vite-plugin-vconsole';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());

    console.log(`Vite for admin. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);

    return {
        base: !isEmpty(env.VITE_APP_BASE) ? env.VITE_APP_BASE : '/',
        resolve: {
            alias: {},
        },
        plugins: [
            vue(),
            vueJsx(),
            tsconfigPaths(),
            viteVConsole({
                entry: [resolve(__dirname, 'src/main.ts')],
                enabled: isEqual(env.VITE_APP_CONSOLE_ENABLED, 'true'),
            }),
            VueI18n({ runtimeOnly: false }),
            AutoImport({
                imports: ['vue'],
                resolvers: [
                    ElementPlusResolver({}),
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
            }),
            Components({
                resolvers: [
                    ElementPlusResolver({}),
                    IconsResolver({
                        enabledCollections: ['ep', 'mdi', 'ant-design', 'ion'],
                    }),
                ],
                dts: resolve(__dirname, 'src/types/components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        server: {
            host: !isEmpty(env.VITE_HOST) ? env.VITE_HOST : '0.0.0.0',
            port: !isEmpty(env.VITE_PORT) ? toNumber(env.VITE_PORT) : 8083,
        },
        build: {
            target: 'ES2015',
        },
        optimizeDeps: {
            esbuildOptions: {
                define: {
                    global: 'globalThis',
                },
            },
        },
    };
});
