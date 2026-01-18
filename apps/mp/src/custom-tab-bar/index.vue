<template>
    <cover-view class="tab-bar">
        <cover-view class="tab-bar-border"></cover-view>
        <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @tap="switchTab(index, item.pagePath)">
            <cover-image :src="selectedIndex === index ? item.selectedIconPath : item.iconPath" />
            <cover-view :style="{ color: selectedIndex === index ? selectedColor : color }">{{ item.text }}</cover-view>
        </cover-view>
    </cover-view>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import { CoverImage, CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { computed } from 'vue';

const appStore = useAppStore();
const selectedIndex = computed<number>(() => appStore.tabBar.index);
const selectedColor = '#DC143C';
const color = '#000000';
const list = [
    {
        pagePath: '/pages/home/index',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: 'home',
    },
    {
        pagePath: '/pages/me/index',
        selectedIconPath: '../images/tabbar_my_on.png',
        iconPath: '../images/tabbar_my.png',
        text: 'me',
    },
];

async function switchTab(index: number, url: string) {
    console.log(index);
    appStore.setTabBarIndex(index);
    Taro.switchTab({ url });
}
</script>

<style lang="css">
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: white;
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
}

.tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tab-bar-item cover-image {
    width: 54px;
    height: 54px;
}

.tab-bar-item cover-view {
    font-size: 20px;
}
</style>
