import { env } from '@commons/core/env';
import { ChatInit, convertToModelMessages, createIdGenerator, TextStreamChatTransport, UIMessage, UseCompletionOptions } from 'ai';

export type PrepareRequestPayload = {
    body: object;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
};

export type PrepareRequestOptions = {
    id: string;
    messages: UIMessage[];
    requestMetadata: unknown;
    body: Record<string, any> | undefined;
    credentials: RequestCredentials | undefined;
    headers: HeadersInit | undefined;
};

export const defaultUseChatOptions: ChatInit<UIMessage> = {
    generateId: createIdGenerator({ prefix: 'msgc', size: 16 }),
    transport: new TextStreamChatTransport({
        api: `${env.server}/api/v1/ai/chat`,
        prepareSendMessagesRequest: (options: PrepareRequestOptions): PrepareRequestPayload => {
            return {
                body: {
                    id: options.id,
                    messages: convertToModelMessages(options.messages),
                },
            };
        },
    }),
};

export const defaultUseCompletionOptions: UseCompletionOptions = {
    api: `${env.server}/api/v1/ai/chat/completion`,
    streamProtocol: 'text',
};
