import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial().primaryKey(),
    name: text().notNull(),
    email: text().notNull().unique(),
    password: text().notNull(),
    avatar: text().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});
