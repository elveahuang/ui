<template>
    <div class="m-6">
        <app-magic-builder />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { AppMagicBuilder } from '@commons/webapp/components';

onMounted(async () => {
    log('Page <<MagicBuilder>> mounted.');
});
</script>
