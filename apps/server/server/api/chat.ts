import { H3Event } from 'h3';

export default defineEventHandler((event: H3Event<EventHandlerRequest>) => {
    return {
        message: text(),
    };
});
