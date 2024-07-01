<template>
    <div class="m-6">
        <app-editor />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { AppEditor } from '@commons/core/components';

onMounted(async () => {
    log('Page <<ShowCaseSliderPage>> mounted.');
});
</script>
