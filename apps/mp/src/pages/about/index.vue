<template>
    <View class="index">
        <div class="text-center">
            <text class="text-center">{{ appStore.count }}</text>
        </div>
        <div class="text-center">
            <button class="text-center" @click="onClick">Show</button>
        </div>
        <div class="text-center" v-if="show">Hello Taro</div>
        <div class="text-center">
            <button class="text-center" @click="goTo('/pages/about/index')">About</button>
            <button class="text-center" @click="goTo('/pages/home/index')">Home</button>
        </div>
    </View>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';
import { isWeApp, isWebApp } from '@/utils';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { ref } from 'vue';

const appStore = useAppStore();
const show = ref(false);
const onClick = () => {
    console.log('click');
    console.log(`isWeApp ${isWeApp()}`);
    console.log(`isWebApp ${isWebApp()}`);
    show.value = !show.value;
    appStore.increment();
};
const goTo = (page: string = '') => {
    Taro.navigateTo({ url: page });
};
</script>
