<template>
    <pre>{{ data.message }}</pre>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/chat');
</script>
