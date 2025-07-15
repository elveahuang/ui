import NutUIResolver from '@nutui/auto-import-resolver';
import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import devConfig from './dev';
import prodConfig from './prod';

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
    const baseConfig: UserConfigExport<'vite'> = {
        projectName: 'mp',
        date: '2025-4-15',
        designWidth(input: any) {
            if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
                return 375;
            }
            return 750;
        },
        deviceRatio: {
            640: 2.34 / 2,
            750: 1,
            375: 2,
            828: 1.81 / 2,
        },
        sourceRoot: 'src',
        outputRoot: 'dist',
        plugins: ['@tarojs/plugin-html'],
        defineConstants: {},
        copy: {
            patterns: [],
            options: {},
        },
        framework: 'vue3',
        compiler: {
            type: 'vite',
            vitePlugins: [
                Components({
                    resolvers: [NutUIResolver({ taro: true })],
                    dts: resolve(__dirname, '../src/types/components.d.ts'),
                }),
                tsconfigPaths(),
            ],
        },
        mini: {
            postcss: {
                pxtransform: {
                    enable: true,
                    config: {},
                },
                cssModules: {
                    enable: false,
                    config: {
                        namingPattern: 'module',
                        generateScopedName: '[name]__[local]___[hash:base64:5]',
                    },
                },
            },
        },
        h5: {
            publicPath: '/',
            staticDirectory: 'static',
            miniCssExtractPluginOption: {
                ignoreOrder: true,
                filename: 'css/[name].[hash].css',
                chunkFilename: 'css/[name].[chunkhash].css',
            },
            postcss: {
                autoprefixer: {
                    enable: true,
                    config: {},
                },
                cssModules: {
                    enable: false,
                    config: {
                        namingPattern: 'module',
                        generateScopedName: '[name]__[local]___[hash:base64:5]',
                    },
                },
            },
        },
        rn: {
            appName: 'taroDemo',
            postcss: {
                cssModules: {
                    enable: false,
                },
            },
        },
    };
    if (process.env.NODE_ENV === 'development') {
        return merge({}, baseConfig, devConfig);
    }
    return merge({}, baseConfig, prodConfig);
});
