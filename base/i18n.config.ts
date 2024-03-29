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
 * Created At: Monday, 26th Feb 2024
 * Modified By: Godwin peter .O
 * Modified At: Thu Mar 21 2024
 */

import { defaultTranslation, defaultLanguage } from '@trace/locales';

const loadLocaleMessages = () => {
  const locales = import.meta.glob('../locales/output/*.json', { eager: true });
  const messages: Record<string, any> = {};
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key];
    }
  });
  messages[defaultLanguage] = defaultTranslation;

  return messages;
};

export default defineI18nConfig(() => {
  const messages = loadLocaleMessages();

  return {
    legacy: false,
    globalInjection: true,
    locale: defaultLanguage,
    messages,
  };
});
