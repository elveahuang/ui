<template>
    <view class="index">
        <div class="text-center">
            <button class="text-center" @click="onClick">Show</button>
        </div>
        <div v-if="show">Hello Taro</div>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
const onClick = () => {
    console.log('click');
    show.value = !show.value;
};
</script>
