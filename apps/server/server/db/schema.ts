import { relations } from 'drizzle-orm';
import { boolean, integer, jsonb, pgEnum, pgTable, primaryKey, serial, text, timestamp } from 'drizzle-orm/pg-core';

// ==========================================
// ENUMS
// ==========================================
export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'author', 'user']);
export const postStatusEnum = pgEnum('post_status', ['draft', 'published', 'archived']);

// ==========================================
// USERS TABLE
// ==========================================
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(), // Hashed password
    avatar: text('avatar'), // Nullable for optional avatars
    role: userRoleEnum('role').notNull().default('user'),
    isActive: boolean('is_active').notNull().default(true),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
    pages: many(pages),
    media: many(media),
}));

// ==========================================
// CATEGORIES TABLE (Hierarchical)
// ==========================================
export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    parentId: integer('parent_id'), // Self-referencing constraint handled in relations
    sortOrder: integer('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const categoriesRelations = relations(categories, ({ one, many }) => ({
    parent: one(categories, {
        fields: [categories.parentId],
        references: [categories.id],
    }),
    posts: many(posts),
}));

// ==========================================
// TAGS TABLE (Flat Taxonomy)
// ==========================================
export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
    postsToTags: many(postsTags),
}));

// ==========================================
// POSTS TABLE (Main Content)
// ==========================================
export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    excerpt: text('excerpt'),
    content: text('content').notNull(), // Can store Markdown or HTML
    coverImage: text('cover_image'),
    authorId: integer('author_id')
        .notNull()
        .references(() => users.id, { onDelete: 'restrict' }), // Don't delete users who have posts
    categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }), // Optional category
    status: postStatusEnum('status').notNull().default('draft'),
    isFeatured: boolean('is_featured').notNull().default(false),
    viewCount: integer('view_count').notNull().default(0),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const postsRelations = relations(posts, ({ one, many }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id],
    }),
    category: one(categories, {
        fields: [posts.categoryId],
        references: [categories.id],
    }),
    postsToTags: many(postsTags),
}));

// ==========================================
// POSTS_TAGS TABLE (Many-to-Many Relationship)
// ==========================================
export const postsTags = pgTable(
    'posts_tags',
    {
        postId: integer('post_id')
            .notNull()
            .references(() => posts.id, { onDelete: 'cascade' }),
        tagId: integer('tag_id')
            .notNull()
            .references(() => tags.id, { onDelete: 'cascade' }),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.postId, t.tagId] }),
    }),
);

export const postsTagsRelations = relations(postsTags, ({ one }) => ({
    post: one(posts, {
        fields: [postsTags.postId],
        references: [posts.id],
    }),
    tag: one(tags, {
        fields: [postsTags.tagId],
        references: [tags.id],
    }),
}));

// ==========================================
// PAGES TABLE (Standalone pages like About, Contact)
// ==========================================
export const pages = pgTable('pages', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    content: text('content').notNull(),
    authorId: integer('author_id')
        .notNull()
        .references(() => users.id, { onDelete: 'restrict' }),
    status: postStatusEnum('status').notNull().default('draft'),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const pagesRelations = relations(pages, ({ one }) => ({
    author: one(users, {
        fields: [pages.authorId],
        references: [users.id],
    }),
}));

// ==========================================
// MEDIA TABLE (Asset Management)
// ==========================================
export const media = pgTable('media', {
    id: serial('id').primaryKey(),
    filename: text('filename').notNull(),
    url: text('url').notNull(),
    mimetype: text('mimetype').notNull(),
    size: integer('size'), // file size in bytes
    uploadedById: integer('uploaded_by_id').references(() => users.id, { onDelete: 'set null' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const mediaRelations = relations(media, ({ one }) => ({
    uploadedBy: one(users, {
        fields: [media.uploadedById],
        references: [users.id],
    }),
}));

// ==========================================
// SETTINGS TABLE (Key-Value Store for Global Config)
// ==========================================
export const settings = pgTable('settings', {
    key: text('key').primaryKey(), // e.g., 'site_title', 'site_logo'
    value: jsonb('value').notNull(), // Flexible structure for setting values
    description: text('description'),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
