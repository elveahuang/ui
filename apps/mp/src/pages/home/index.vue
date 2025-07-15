<template>
    <View class="index">
        <div class="text-center">Home</div>
    </View>
</template>

<script lang="ts" setup>
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

useDidShow(() => {
    console.log('useDidShow');
});
</script>
