<template>
    <el-divider />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'XDivider',
    props: {
        height: { type: Number, required: false, default: 20 },
    },
    onMounted() {
        log('Builder Component <<Divider>> mounted.');
    },
});
</script>
