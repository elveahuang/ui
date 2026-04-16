<template>
    <pre>{{ data?.message ?? 'Hello World' }}</pre>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/user');
</script>
