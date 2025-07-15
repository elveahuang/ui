import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import devConfig from './dev';
import prodConfig from './prod';

export default defineConfig<'webpack5'>(async (merge): Promise<object> => {
    const baseConfig: UserConfigExport<'webpack5'> = {
        projectName: 'mp',
        date: '2025-1-1',
        designWidth(): number {
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
            type: 'webpack5',
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
            webpackChain(chain) {
                chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
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
            webpackChain(chain) {
                chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
            },
        },
    };
    if (process.env.NODE_ENV === 'development') {
        return merge({}, baseConfig, devConfig);
    }
    return merge({}, baseConfig, prodConfig);
});
