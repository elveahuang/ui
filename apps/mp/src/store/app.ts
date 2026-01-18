import { store } from '@/store';
import { defineStore } from 'pinia';

export interface AppState {
    /**
     * 名称
     */
    title: string;
    /**
     * 版本号
     */
    version: string;
    /**
     * 页面是否正在加载
     */
    loading: boolean;
    /**
     * 左边导航侧边栏
     */
    tabBar: {
        index: number;
    };
}

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        title: '',
        version: '',
        loading: true,
        tabBar: {
            index: 0,
        },
    }),
    getters: {},
    actions: {
        setTitle(title: string): void {
            this.title = title;
        },
        setVersion(title: string): void {
            this.title = title;
        },
        setTabBarIndex(index: number = 0): void {
            this.tabBar.index = index;
        },
    },
});

export const useAppStoreExternal = () => {
    return useAppStore(store);
};
