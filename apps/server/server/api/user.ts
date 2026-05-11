import { db } from '@nuxthub/db';
import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    return {
        message: text(),
        items: await db.query.users.findMany(),
    };
});
