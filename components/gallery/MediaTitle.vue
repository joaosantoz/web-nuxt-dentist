<template>
  <header class="md:hidden absolute top-5 left-0 z-50 w-full px-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center">
        <img
          class="rounded-full object-cover h-[52px] w-[52px]"
          :src="headerImage" />
        <h4 class="text-white text-md font-semibold ml-2">{{ headerTitle }}</h4>
      </div>
      <icons-svg-close
        @click="emit('close-modal')"
        class="cursor-pointer hover:scale-105 transition-all" />
    </div>
  </header>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'close-modal'): void;
}>();

const headerTitle = inject<string>(PROVIDER_KEY.PROFILE_TITLE);
const headerImage = inject<string>(PROVIDER_KEY.PROFILE_PHOTO);
</script>
