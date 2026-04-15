import { createDeepSeek, DeepSeekProvider } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

export default defineLazyEventHandler(async () => {
    const deepSeek: DeepSeekProvider = createDeepSeek({
        apiKey: useRuntimeConfig().deepseekApiKey,
    });
    return defineEventHandler(async (event: any) => {
        const { prompt } = await readBody(event);
        const result = streamText({
            model: deepSeek('deepseek-chat'),
            prompt,
        });
        return result.toUIMessageStreamResponse();
    });
});
