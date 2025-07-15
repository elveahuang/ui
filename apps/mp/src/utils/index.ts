import { setupStore } from '@/store';
import { App } from 'vue';

declare const process: any;

export const setupApp = async (app: App): Promise<void> => {
    // 设置状态
    await setupStore(app).then();
};

export const isWeApp = () => {
    return process.env.TARO_ENV === 'weapp';
};

export const isWebApp = () => {
    return process.env.TARO_ENV === 'h5';
};
