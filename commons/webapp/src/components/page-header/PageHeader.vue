<template>
    <div class="app-page-header">
        <template v-if="title">
            <span class="app-page-title app-text-title" v-html="title"></span>
        </template>
        <template v-else>
            <div class="app-page-title">
                <slot name="title" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { log } from '@commons/core/utils';
import { onMounted } from 'vue';

defineProps({
    title: {
        type: String,
        require: false,
        default: false,
    },
});

onMounted(async () => {
    log('Component <<PageHeader>> mounted.');
});
</script>

<style lang="css" scoped>
@reference "tailwindcss/theme";

.app-page-header {
    @apply mb-2 py-2;
}
</style>
