import { createDeepSeek, type DeepSeekProvider } from '@ai-sdk/deepseek';
import { convertToModelMessages, streamText } from 'ai';

export default defineLazyEventHandler(async () => {
    const deepSeek: DeepSeekProvider = createDeepSeek({
        apiKey: useRuntimeConfig().deepseekApiKey,
    });
    return defineEventHandler(async (event: any) => {
        const { messages } = await readBody(event);
        console.log('messages', messages);
        const result = streamText({
            model: deepSeek('deepseek-chat'),
            messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse();
    });
});
