<script setup lang="ts">
import type { IProfile } from '@trace/shared';
import { computed } from 'vue';

defineOptions({ name: 'SidebarUser' });

interface IProps {
  profile: IProfile;
  mini: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  mini: true,
});

const emits = defineEmits<{
  (eventName: 'update:mini', value: boolean): void;
}>();

const truncateText = (evalText: string, maxLength: number) => {
  return evalText.length > maxLength
    ? `${evalText.substring(0, maxLength)}..`
    : evalText;
};

const userFullName = computed<string>(() =>
  truncateText(`${props.profile.firstName} ${props.profile.lastName}`, 12),
);

const userEmail = computed<string>(() => truncateText(props.profile.email, 22));

const iconTextChar = computed(
  () => props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0),
);
</script>

<template>
  <div v-bind="$attrs">
    <q-avatar
      v-if="mini"
      rounded
      color="red-5"
      class="user-state-avatar"
      size="3.5em"
      text-color="white"
    >
      {{ iconTextChar }}
      <q-badge floating color="green-9" rounded />
    </q-avatar>
    <div
      v-else
      class="user-state row cursor-pointer q-pa-sm bg-app-background full-width"
    >
      <div class="self-start col-2">
        <q-avatar
          rounded
          color="red-5"
          class="user-state-avatar"
          size="3.5em"
          text-color="white"
        >
          {{ iconTextChar }}
          <q-badge floating color="green-9" rounded />
        </q-avatar>
      </div>
      <div class="col-10 row">
        <div class="col-12 text-no-wrap q-pl-md">
          <div
            class="text-weight-medium text-primary"
            style="font-size: 1.65rem; margin-top: -0.2rem"
          >
            {{ userFullName }}
          </div>
          <div
            class="caption text-accent-more q-ml-xs"
            style="margin-top: -0.4rem"
          >
            {{ userEmail }}
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.user-state,
.user-state-avatar {
  border-radius: $border-radius-sm;
}
</style>
