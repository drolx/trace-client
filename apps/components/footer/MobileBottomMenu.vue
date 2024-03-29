<script setup lang="ts">
import type { RouteMenu } from '@trace/base/typings';

defineOptions({ name: 'MobileBottomMenu' });

interface IProps {
  overflowFilters?: string[];
}
const props = withDefaults(defineProps<IProps>(), {
  overflowFilters: () => [],
});

const state = ref('');
const moreItems = ref(false);
const { modules } = defineModels<{
  modules: ModelOptions<RouteMenu[], { defaultValue: []; deep: true }>;
}>();

const displayedModules = computed<RouteMenu[]>(() => {
  return modules.value.filter((e) =>
    props.overflowFilters.includes(e.name as string),
  );
});
const overflowModules = computed<RouteMenu[]>(() =>
  modules.value.filter(
    (e) => !props.overflowFilters.includes(e.name as string),
  ),
);

const toogleMenuOverflow = () => (moreItems.value = !moreItems.value);
</script>

<template>
  <q-footer
    v-if="overflowModules.length > 0"
    class="row justify-center app-footer q-pa-xs q-mb-none q-mx-sm"
  >
    <q-tabs
      v-model="state"
      active-color="action"
      align="center"
      strech
      no-caps
      switch-indicator
      narrow-indicator
      indicator-color="action"
      content-class="mobile-footer-item"
      class="text-space"
    >
      <q-route-tab
        v-for="(item, index) in displayedModules"
        :key="index"
        :name="item.name as string"
        :to="{ name: item.name }"
        :icon="item.icon"
        class="border-radius-md"
      >
        <q-badge
          v-show="item.name === 'core-overview'"
          floating
          color="red-7"
          rounded
        >
          {{ '23+' }}
        </q-badge>
      </q-route-tab>
      <q-route-tab
        v-model="moreItems"
        name="more"
        icon="bi-grid-3x3-gap"
        class="border-radius-md"
        @click="toogleMenuOverflow"
      >
        <q-menu
          v-if="overflowModules.length > 0 && moreItems"
          v-model="moreItems"
          :offset="[40, 20]"
          auto-close
          class="border-radius-md q-pa-sm full-width"
        >
          <q-list padding>
            <template v-for="(item, index) in overflowModules" :key="index">
              <q-item
                :to="{ name: item.name }"
                class="border-radius-sm text-accent-more"
                active-class="text-action"
                clickable
              >
                <q-item-section avatar>
                  <q-icon size="1.7em" color="primary" :name="item.icon" />
                </q-item-section>
                <q-item-section class="text-h6 text-weight-regular" no-wrap>
                  {{ $t(item.title as string) }}
                </q-item-section>
              </q-item>
              <q-separator
                v-if="index < overflowModules.length - 1"
                color="app-background"
                class="q-mx-sm"
              />
            </template>
          </q-list>
        </q-menu>
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<style lang="scss" scoped>
.app-footer {
  border-radius: $border-radius-md;
  background-color: var(--q-app-plain);
  border: 1px solid var(--q-app-background-more);

  .badge {
    font-size: unset;
    top: 0.4rem;
    right: 0.3rem;
  }
}
</style>
