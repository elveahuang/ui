<template>
    <View class="index">
        <div class="text-center">Index</div>
    </View>
</template>

<script lang="ts" setup>
import { View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';

useDidShow(() => {
    console.log(Taro.getCurrentInstance().page.getTabBar());
});
</script>
