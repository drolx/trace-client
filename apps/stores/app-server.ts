/*
 * Copyright (c) 2023 - 2024 drolx Labs
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://trace.ng/licenses/license-1-0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Wednesday, 15th May 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu May 16 2024
 */

import type { Tenant, Workflow } from '@trace/model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ServerState = {
  maintenance?: boolean;
  profile?: Tenant;
  workflow?: Workflow;
  attribution?: string;
  attributionUrl?: string;
};

export const useServerStore = defineStore('app-server', () => {
  const serverState = ref<ServerState>({});
  const getTenantProfile = computed<Tenant | undefined>(
    () => serverState.value.profile,
  );
  const getTenantName = computed<string | undefined>(
    () => serverState?.value?.profile?.name,
  );
  const getAttribution = computed<string | undefined>(
    () => serverState?.value.attribution,
  );
  const getAttributionUrl = computed<string | undefined>(
    () => serverState?.value.attributionUrl,
  );
  const getWorkflow = computed<Workflow | undefined>(
    () => serverState?.value.workflow,
  );
  const getServerState = computed(() => serverState.value);
  const setServerState = (value: ServerState) => (serverState.value = value);

  return {
    getTenantProfile,
    getTenantName,
    getAttribution,
    getAttributionUrl,
    getWorkflow,
    getServerState,
    setServerState,
  };
});