/*
 * Copyright (c) 2023 - 2024 drolx Solutions
 *
 * Licensed under the Business Source License 1.1 and Trace License
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
 * Created At: Monday, 19th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon Mar 11 2024
 */

import type { Route } from '@trace/base/types/index';

const routes: Route[] = [
  {
    name: 'home',
    path: '/',
    redirect: { name: 'quick-start' },
  },
  {
    name: 'quick-start',
    path: "/quick-start",
    component: () => import("@/pages/QuickStart.vue"),
    meta: {
      title: "router.quick-start",
      icon: "sync",
    },
  },
  {
    name: 'app.un-authorized',
    path: "/un-authorized",
    component: () => import("@/pages/UnAuthorized.vue"),
    meta: {
      title: "router.un-authorized",
      icon: "sync",
    },
  },
  {
    name: 'app.testing',
    path: "/testing",
    component: () => import("@trace/base/pages/Testing.vue"),
    meta: {
      title: "router.testing",
      icon: "sync",
    },
  },
];

export default routes;