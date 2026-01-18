<template>
    <div>
        <div class="stretch mx-auto flex w-full max-w-md flex-col py-24">
            <div v-for="message in messages" :key="message.id" class="whitespace-pre-wrap">
                <strong>{{ `${message.role}: ` }}</strong>
                {{ message.parts.map((part) => (part.type === 'text' ? part.text : '')).join('') }}
            </div>

            <form @submit="handleSubmit">
                <input
                    class="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
                    v-model="input"
                    placeholder="Say something..."
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Chat } from '@ai-sdk/vue';
import { defaultUseChatOptions } from '@commons/core/utils/ai';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, ref } from 'vue';

const chat = new Chat({
    ...defaultUseChatOptions,
    id: '37c87e3a-ddfe-46ef-b073-7ef3f2f13be9',
});
const messages = computed(() => chat.messages);
const input = ref('');
const handleSubmit = (e: Event) => {
    e.preventDefault();
    chat.sendMessage({ text: input.value });
    input.value = '';
};

onMounted(async () => {
    console.log(uuidv4());
});
</script>
