<template>
    <el-button text circle size="large" @click="onChange">
        <template #icon>
            <app-icon :size="24" v-if="model" icon="mdi:weather-night" />
            <app-icon :size="24" v-else icon="mdi:white-balance-sunny" />
        </template>
    </el-button>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useAppStore } from '@commons/core/store';
import { useDark } from '@commons/core/hooks/useDark';
import { default as AppIcon } from '../icon/Icon.vue';

const appStore = useAppStore();
const { setDark } = useDark();
const model: ComputedRef<boolean> = computed<boolean>(() => appStore.dark);
const onChange = async (): Promise<void> => {
    await setDark(!appStore.dark).then();
};
</script>
