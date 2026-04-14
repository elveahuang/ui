<template>
    <Suspense>
        <Comark>{{ content }}</Comark>
    </Suspense>
</template>

<script setup lang="ts">
import { Comark } from '@comark/vue';

const content = `# Hello World

This is **markdown** with Comark components.
`;
</script>
