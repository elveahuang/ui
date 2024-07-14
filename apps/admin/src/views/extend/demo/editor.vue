<template>
    <div class="m-6">
        <app-editor />
    </div>
    <div class="m-6">
        <app-a-editor />
    </div>
    <div class="m-6">
        <app-q-editor />
    </div>
</template>

<script setup lang="ts">
import { AppAEditor, AppEditor, AppQEditor } from '@commons/core/components';
import { log } from '@commons/core/utils';
import { onMounted } from 'vue';

onMounted(async () => {
    log('Page <<Editor>> mounted.');
});
</script>
