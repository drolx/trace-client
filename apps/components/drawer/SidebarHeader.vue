<script setup lang="ts">
import { inject } from 'vue';
import AppLogo from '@trace/base/icons/logo.svg';

defineOptions({ name: 'SidebarHeader' });
const { modelValue } = defineModels<{
  modelValue: boolean;
}>();
const workspace = inject<any>('app:workspace');
</script>

<template>
  <q-toolbar class="q-pa-none" style="min-height: 64px">
    <div v-show="modelValue" class="q-mx-auto" style="height: 49px">
      <app-logo class="app-logo self-start col-1 q-mx-auto" />
    </div>
    <div
      v-show="!modelValue"
      class="full-width row cursor-pointer q-px-md"
      style="height: 49px"
    >
      <app-logo class="sidebar-logo self-start col-3" />
      <div class="col-9 row">
        <div class="col-10 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary text-capitalize">
            {{ workspace }}
          </div>
          <div class="text-accent-more">
            {{ 'Workspace' }}
          </div>
        </div>
      </div>
    </div>
  </q-toolbar>
</template>

<style lang="scss" scoped>
.sidebar-logo {
  width: 50px;
  height: 50px;
  :deep(path) {
    fill: var(--q-primary);
  }
}
</style>
