<template>
    <div class="m-6">
        <app-magic-builder />
    </div>
</template>

<script setup lang="ts">
import { log } from '@commons/core/utils';
import { AppMagicBuilder } from '@commons/webapp/components';
import { onMounted } from 'vue';

onMounted(async () => {
    log('Page <<MagicBuilder>> mounted.');
});
</script>
