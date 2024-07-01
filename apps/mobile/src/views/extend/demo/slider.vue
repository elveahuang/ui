<template>
    <div class="m-6">
        <van-slider v-model="cur" :min="min" :max="max" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { log } from '@commons/core/utils';

const cur: Ref<number> = ref(-10);
const min: Ref<number> = ref(-100);
const max: Ref<number> = ref(-10);

onMounted(async () => {
    log('Page <<ShowCaseSliderPage>> mounted.');
});
</script>
