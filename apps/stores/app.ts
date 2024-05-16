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
 * Created At: Wednesday, 27th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Wed May 15 2024
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const reloadFlag = ref(true);
  const isDrawerMini = ref(false);

  const reloadPage = async (duration: number = 0) => {
    reloadFlag.value = false;
    await nextTick();
    if (duration) {
      setTimeout(() => {
        reloadFlag.value = true;
      }, duration);
    } else {
      reloadFlag.value = true;
    }
  };

  const setDrawerMini = (mini: boolean) => {
    isDrawerMini.value = mini;
  };

  return {
    reloadFlag,
    isDrawerMini,
    reloadPage,
    setDrawerMini,
  };
});
