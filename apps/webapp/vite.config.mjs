import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { isEqual } from 'es-toolkit/compat';
import { resolve } from 'path';
import rollupCopy from 'rollup-plugin-copy';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import { viteVConsole } from 'vite-plugin-vconsole';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());

    console.log(`Vite for webapp. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);

    return {
        base: env.VITE_APP_BASE ?? '/',
        resolve: {
            alias: {
                '~vant': 'vant',
            },
        },
        plugins: [
            vue(),
            tailwindcss(),
            tsconfigPaths(),
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
            vueDevTools({}),
            viteVConsole({
                entry: [resolve(__dirname, 'src/main.ts')],
                localEnabled: false,
                enabled: isEqual(env.VITE_APP_CONSOLE_ENABLED, 'true'),
            }),
            rollupCopy({
                targets: [
                    {
                        src: resolve(__dirname, '../../node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm'),
                        dest: process.env.NODE_ENV === 'production' ? 'dist/wasm' : 'public/wasm',
                    },
                ],
                hook: process.env.NODE_ENV === 'production' ? 'writeBundle' : 'buildStart',
            }),
        ],
        server: {
            host: env.VITE_HOST ?? '0.0.0.0',
            port: Number.parseInt(env.VITE_PORT ?? 8081),
        },
        build: {
            modulePreload: false,
            target: 'ES2018',
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
