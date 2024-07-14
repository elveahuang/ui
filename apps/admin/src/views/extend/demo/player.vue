<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="m-6" style="height: 300px; max-height: 300px">
            <app-player :options="options" />
        </div>
        <div class="m-6" style="height: 300px; max-height: 300px">
            <app-x-player :options="options" />
        </div>
        <div class="m-6" style="height: 300px; max-height: 300px">
            <app-v-player :options="options" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppPlayer, AppVPlayer, AppXPlayer } from '@commons/core/components';
import { log } from '@commons/core/utils';
import { onMounted } from 'vue';

const options = ref({
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
});

onMounted(async () => {
    log('Page <<Player>> mounted.');
});
</script>
