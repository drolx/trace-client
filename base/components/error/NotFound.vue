<script setup lang="ts">
import NotFound from '@/icons/not-found.svg?url';
import { useAppBreakpoints } from '@/composables/breakpoints';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'NotFound' });
interface IProps {
  home?: string;
}
withDefaults(defineProps<IProps>(), {
  home: 'home',
});

const breakpointStates = useAppBreakpoints();
const { isDesktop } = storeToRefs(breakpointStates);
</script>

<template>
  <div class="column items-center justify-center q-mt-lg">
    <q-img
      no-native-menu
      no-spinner
      :src="NotFound"
      class="q-mt-xs q-mb-md"
      width="calc(32vw)"
      alt="Under Construction"
    />
    <div class="text-center q-mt-lg">
      <transition
        v-show="isDesktop"
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backInDown"
      >
        <q-btn
          color="primary"
          class="border-radius-sm"
          size="lg"
          no-caps
          :to="{ name: home }"
          outline
          style="width: 200px"
        >
          Home
        </q-btn>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/error.scss';
</style>
