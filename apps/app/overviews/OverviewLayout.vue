<script lang="ts" setup>
import { useLayoutRouteStore } from '@/composables/layout-routes';
import SwitcherButton from '@/components/extra/SwitcherButton.vue';

const { moduleChildrenFn } = useLayoutRouteStore();
const navigations = computed(() => moduleChildrenFn());
const selected = ref('Status');
const dashboardTypes: string[] = ['Status', 'Availability'];
</script>

<template>
  <page-wrapper :scrollable="true">
    <q-toolbar class="align-center q-px-sm q-py-xs">
      <switcher-button
        style="width: 240px"
        :dense="true"
        :route="true"
        :items="navigations"
      ></switcher-button>
      <q-space />
      <div class="row q-gutter-md">
        <q-select
          v-model="selected"
          dense
          :options="dashboardTypes"
          label=""
          class="border-radius-sm gt-sm"
        />
        <q-btn
          dense
          icon="bi-sliders2"
          color="accent"
          class="q-px-md q-py-sm border-radius-sm"
        ></q-btn>
      </div>
    </q-toolbar>
    <router-view></router-view>
  </page-wrapper>
</template>
