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
 * Created At: Friday, 8th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Mon Mar 25 2024
 */

import type { RouterConfig } from '@nuxt/schema';
import defaultRoutes, { addCatchAll, addUnAuthorized } from '@/routes.default';
import accountRoutes, {
  routes as identityRoutes,
} from '@/app.account/app-routes';
import coreRoutes from '@/app.core/app-routes';
import trackRoutes from '@/app.track/app-routes';
import supportRoutes from '@/app.support/app-routes';
import dispatchRoutes from '@/app.dispatch/app-routes';
import portalRoutes from '@/app.portal/app-routes';
import partnerRoutes from '@/app.partner/app-routes';
import { Workspace } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export const addWorkspaceRoute = (
  app: Workspace,
  component: any,
  children: Route[],
  filter: string[] = [],
  mobileFilter: string[] = [],
  root: string = 'overview',
): Route => ({
  name: app,
  path: `/${app}`,
  component: component,
  children: children,
  meta: { menu: 'app' },
  redirect: { name: `${app}-${root}` },
  props: { workspace: app, overviewFilter: filter, mobileFilter: mobileFilter },
});

export const routes = [
  {
    name: 'home',
    path: '/',
    redirect: { name: 'work-spaces' },
    component: () => import('@/app/EmptyLayout.vue'),
    children: [addCatchAll(), addUnAuthorized(), ...defaultRoutes],
  },
  ...identityRoutes,
  addWorkspaceRoute(
    Workspace.Account,
    () => import('@/app/DynamicLayout.vue'),
    accountRoutes,
    [],
    [],
    'profile',
  ),
  addWorkspaceRoute(
    Workspace.Core,
    () => import('@/app/DynamicLayout.vue'),
    coreRoutes,
    ['core-overview', 'core-calendar'],
    ['core-overview', 'core-calendar', 'core-tracking', 'core-engagements'],
  ),
  addWorkspaceRoute(
    Workspace.Track,
    () => import('@/app/LiveLayout.vue'),
    trackRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Support,
    () => import('@/app/DynamicLayout.vue'),
    supportRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Dispatch,
    () => import('@/app/DynamicLayout.vue'),
    dispatchRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Portal,
    () => import('@/app/DynamicLayout.vue'),
    portalRoutes,
    [],
    [],
  ),
  addWorkspaceRoute(
    Workspace.Partner,
    () => import('@/app/DynamicLayout.vue'),
    partnerRoutes,
    [],
    [],
  ),
] as Route[];

export default <RouterConfig>{
  routes: () => routes,
};
