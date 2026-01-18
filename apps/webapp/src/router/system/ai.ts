import { RouteRecordRaw } from 'vue-router';

export const aiRoutes: RouteRecordRaw[] = [
    {
        path: '/ai',
        name: 'ai-wrapper',
        meta: {
            description: 'AI',
        },
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: 'chat',
                name: 'ai-chat',
                meta: {
                    description: '资讯首页',
                },
                component: () => import('@/views/system/ai/chat.vue'),
            },
            {
                path: 'completion',
                name: 'ai-completion',
                meta: {
                    description: '资讯首页',
                },
                component: () => import('@/views/system/ai/completion.vue'),
            },
        ],
    },
];
