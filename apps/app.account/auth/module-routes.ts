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
 * Modified At: Sat Mar 23 2024
 */

import type { Route } from '@trace/base/typings';
import { Workspace } from '@trace/shared';

const routes: Route[] = [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'auth.sign-in' },
    component: () => import('./AuthLayout.vue'),
    meta: {
      permission: false,
    },
    props: {
      workspace: Workspace.Identity,
    },
    children: [
      {
        path: 'sign-in',
        name: 'auth.sign-in',
        component: () => import('./pages/SignIn.vue'),
        meta: {
          title: 'Sign In',
          permission: false,
        },
      },
      // {
      //   path: 'two-factor',
      //   name: 'auth.two-factor',
      //   component: () => import('./pages/VerifyOtp.vue'),
      //   meta: {
      //     title: 'Two Factor OTP',
      //     permission: false,
      //   },
      // },
    ],
  },
];

export default routes;
