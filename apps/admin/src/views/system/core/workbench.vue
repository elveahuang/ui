<template>
    <el-card title="工作台" shadow="never">
        <span>开心每一天</span>
    </el-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { log } from '@commons/core/utils';

onMounted(async () => {
    log('Page <<Workbench>> mounted.');
});
</script>
