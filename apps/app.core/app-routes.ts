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
 * Created At: Thursday, 14th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu Mar 21 2024
 */

import { addCatchAll, addUnAuthorized } from '@/routes.default';
import addOverviewRoute from '@/app/overviews/module-routes';
import addCalendarRoute from '@/app/calendar/module-routes';
import addContactRoute from '@/app/contacts/module-routes';
import addEngagementRoute from '@/app/engagements/module-routes';
import addRoutesRoute from '@/app/routes/module-routes';
import addLocationsRoute from '@/app/locations/module-routes';
import addTrackingRoute from '@/app/live-tracking/module-routes';
import { ServiceVariant } from '@trace/shared';
import type { Route } from '@trace/base/typings';

export default [
  addCatchAll(ServiceVariant.Core),
  addUnAuthorized(ServiceVariant.Core),
  addOverviewRoute(ServiceVariant.Core),
  addEngagementRoute(ServiceVariant.Core),
  addCalendarRoute(ServiceVariant.Core),
  addTrackingRoute(ServiceVariant.Core),
  addContactRoute(ServiceVariant.Core),
  addRoutesRoute(ServiceVariant.Core),
  addLocationsRoute(ServiceVariant.Core),
] as Route[];
