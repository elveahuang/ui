<template>
    <View class="index">
        <div class="text-center">Home</div>
        <nut-button type="primary" @click="onClick">按钮</nut-button>
        <nut-toast v-model:visible="show" msg="你成功了" />
    </View>
</template>

<script lang="ts" setup>
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { ref } from 'vue';

const show = ref(false);
const onClick = () => {
    show.value = true;
};
useDidShow(() => {
    console.log('useDidShow');
});
</script>
