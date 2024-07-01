<template>
    <div class="m-6">
        <app-home-builder />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { AppHomeBuilder } from '@commons/webapp/components';

onMounted(async () => {
    log('Page <<Builder>> mounted.');
});
</script>
