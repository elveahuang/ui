import { extendRoutes } from '@/router/extend';
import { systemRoutes } from '@/router/system';
import { concat } from 'lodash-es';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = concat(systemRoutes, extendRoutes);
