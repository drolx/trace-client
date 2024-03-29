/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://opensource.org/license/rpl-1-5
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Sunday, 24th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sun Mar 24 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import OnboardRoutes from '@/modules/on-board/routes';

export default <RouterConfig>{
  routes: () => [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'home' },
    },
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/Home.vue'),
        },
        {
          path: 'getting-started',
          name: 'getting-started',
          component: () => import('@/pages/GettingStarted.vue'),
        },
      ],
    },
    OnboardRoutes,
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/components/EmptyLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@trace/base/pages/ErrorNotFound.vue'),
          meta: {
            title: 'router.error',
            icon: 'sync',
          },
        },
      ],
    },
  ],
};
