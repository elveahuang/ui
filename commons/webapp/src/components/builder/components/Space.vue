<template>
    <div />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'XSpace',
    props: {
        height: { type: Number, required: false, default: 20 },
    },
    onMounted() {
        log('Builder Component <<Space>> mounted.');
    },
});
</script>
