// vite.config.mjs
import VueI18n from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/@intlify+unplugin-vue-i18n@2.0.0_vue-i18n@9.9.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs';
import vueJsx from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs';
import vue from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import {
    isEmpty,
    isEqual,
    toNumber,
} from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js';
import AutoImport from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.7.2/node_modules/unplugin-auto-import/dist/vite.js';
import IconsResolver from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.15/node_modules/unplugin-icons/dist/resolver.js';
import Icons from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.15/node_modules/unplugin-icons/dist/vite.js';
import { VantResolver } from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js';
import Components from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js';
import { viteVConsole } from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/vite-plugin-vconsole@2.1.0/node_modules/vite-plugin-vconsole/dist/main.mjs';
import tsconfigPaths from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/vite-tsconfig-paths@4.3.1_typescript@5.3.3_vite@5.0.12/node_modules/vite-tsconfig-paths/dist/index.mjs';
import {
    defineConfig,
    loadEnv,
} from 'file:///Users/elvea/Workspace/github/platform-ui/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.16_sass@1.70.0/node_modules/vite/dist/node/index.js';
import { resolve } from 'path';
var __vite_injected_original_dirname = '/Users/elvea/Workspace/github/platform-ui/apps/mobile';
var vite_config_default = defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`Vite for mobile. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    return {
        base: !isEmpty(env.VITE_APP_BASE) ? env.VITE_APP_BASE : '/',
        resolve: {
            alias: {
                '~vant': 'vant',
            },
        },
        plugins: [
            vue(),
            vueJsx(),
            tsconfigPaths(),
            viteVConsole({
                entry: [resolve(__vite_injected_original_dirname, 'src/main.ts')],
                enabled: isEqual(env.VITE_APP_CONSOLE_ENABLED, 'true'),
            }),
            VueI18n({ runtimeOnly: false }),
            AutoImport({
                imports: ['vue'],
                resolvers: [
                    VantResolver({
                        //
                    }),
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: resolve(__vite_injected_original_dirname, 'src/types/auto-imports.d.ts'),
            }),
            Components({
                resolvers: [
                    VantResolver({
                        //
                    }),
                    IconsResolver({
                        enabledCollections: ['ep', 'mdi', 'ant-design', 'ion'],
                    }),
                ],
                dts: resolve(__vite_injected_original_dirname, 'src/types/components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        server: {
            host: !isEmpty(env.VITE_HOST) ? env.VITE_HOST : '0.0.0.0',
            port: !isEmpty(env.VITE_PORT) ? toNumber(env.VITE_PORT) : 8082,
        },
        build: {
            target: 'ES2015',
        },
    };
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2VsdmVhL1dvcmtzcGFjZS9naXRodWIvcGxhdGZvcm0tdWkvYXBwcy9tb2JpbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9lbHZlYS9Xb3Jrc3BhY2UvZ2l0aHViL3BsYXRmb3JtLXVpL2FwcHMvbW9iaWxlL3ZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZWx2ZWEvV29ya3NwYWNlL2dpdGh1Yi9wbGF0Zm9ybS11aS9hcHBzL21vYmlsZS92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc0VxdWFsLCB0b051bWJlciB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgdml0ZVZDb25zb2xlIH0gZnJvbSAndml0ZS1wbHVnaW4tdmNvbnNvbGUnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyAoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuXG4gICAgY29uc29sZS5sb2coYFZpdGUgZm9yIG1vYmlsZS4gY29tbWFuZCAtICR7Y29tbWFuZH0uIG1vZGUgLSAke21vZGV9LmApO1xuICAgIGNvbnNvbGUubG9nKGBjb21tYW5kIC0gJHtjb21tYW5kfS4gbW9kZSAtICR7bW9kZX0uYCk7XG4gICAgY29uc29sZS5sb2coZW52KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6ICFpc0VtcHR5KGVudi5WSVRFX0FQUF9CQVNFKSA/IGVudi5WSVRFX0FQUF9CQVNFIDogJy8nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgICd+dmFudCc6ICd2YW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHZ1ZSgpLFxuICAgICAgICAgICAgdnVlSnN4KCksXG4gICAgICAgICAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgICAgICAgICB2aXRlVkNvbnNvbGUoe1xuICAgICAgICAgICAgICAgIGVudHJ5OiBbcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi50cycpXSxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBpc0VxdWFsKGVudi5WSVRFX0FQUF9DT05TT0xFX0VOQUJMRUQsICd0cnVlJyksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFZ1ZUkxOG4oeyBydW50aW1lT25seTogZmFsc2UgfSksXG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzOiBbJ3Z1ZSddLFxuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgICAgICAgICAgICBWYW50UmVzb2x2ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiAnSWNvbicsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZHRzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcy9hdXRvLWltcG9ydHMuZC50cycpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgVmFudFJlc29sdmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRDb2xsZWN0aW9uczogWydlcCcsICdtZGknLCAnYW50LWRlc2lnbicsICdpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkdHM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50cycpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBJY29ucyh7XG4gICAgICAgICAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBob3N0OiAhaXNFbXB0eShlbnYuVklURV9IT1NUKSA/IGVudi5WSVRFX0hPU1QgOiAnMC4wLjAuMCcsXG4gICAgICAgICAgICBwb3J0OiAhaXNFbXB0eShlbnYuVklURV9QT1JUKSA/IHRvTnVtYmVyKGVudi5WSVRFX1BPUlQpIDogODA4MixcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIHRhcmdldDogJ0VTMjAxNScsXG4gICAgICAgIH0sXG4gICAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixPQUFPLGFBQWE7QUFDdlcsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLFNBQVMsU0FBUyxnQkFBZ0I7QUFDM0MsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQVoxQixJQUFNLG1DQUFtQztBQWN6QyxJQUFPLHNCQUFRLGFBQWEsT0FBTyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ3JELFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFFdkMsVUFBUSxJQUFJLDhCQUE4QixPQUFPLFlBQVksSUFBSSxHQUFHO0FBQ3BFLFVBQVEsSUFBSSxhQUFhLE9BQU8sWUFBWSxJQUFJLEdBQUc7QUFDbkQsVUFBUSxJQUFJLEdBQUc7QUFFZixTQUFPO0FBQUEsSUFDSCxNQUFNLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFBSSxJQUFJLGdCQUFnQjtBQUFBLElBQ3hELFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLFFBQ1QsT0FBTyxDQUFDLFFBQVEsa0NBQVcsYUFBYSxDQUFDO0FBQUEsUUFDekMsU0FBUyxRQUFRLElBQUksMEJBQTBCLE1BQU07QUFBQSxNQUN6RCxDQUFDO0FBQUEsTUFDRCxRQUFRLEVBQUUsYUFBYSxNQUFNLENBQUM7QUFBQSxNQUM5QixXQUFXO0FBQUEsUUFDUCxTQUFTLENBQUMsS0FBSztBQUFBLFFBQ2YsV0FBVztBQUFBLFVBQ1AsYUFBYTtBQUFBO0FBQUEsVUFFYixDQUFDO0FBQUEsVUFDRCxjQUFjO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDWixDQUFDO0FBQUEsUUFDTDtBQUFBLFFBQ0EsS0FBSyxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLE1BQ3pELENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFdBQVc7QUFBQSxVQUNQLGFBQWE7QUFBQTtBQUFBLFVBRWIsQ0FBQztBQUFBLFVBQ0QsY0FBYztBQUFBLFlBQ1Ysb0JBQW9CLENBQUMsTUFBTSxPQUFPLGNBQWMsS0FBSztBQUFBLFVBQ3pELENBQUM7QUFBQSxRQUNMO0FBQUEsUUFDQSxLQUFLLFFBQVEsa0NBQVcsMkJBQTJCO0FBQUEsTUFDdkQsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLFFBQ0YsYUFBYTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLFlBQVk7QUFBQSxNQUNoRCxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJO0FBQUEsSUFDOUQ7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxJQUNaO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
