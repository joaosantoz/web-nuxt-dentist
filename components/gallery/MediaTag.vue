<template>
  <div class="relative group flex flex-col justify-between items-center w-[104px] h-8">
    <h1
      @click="emitEventChangeTag"
      class="text-tag text-dark-blue text-center cursor-pointer"
      :class="{ 'font-bold': tagActive }">
      {{ tagTitle }} {{ lengthText }}
    </h1>
    <div
      class="bg-dark-blue h-1 transition-all duration-500"
      :class="[tagActive ? 'w-12' : 'w-0']"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tagActive: boolean;
  tagCount: number;
  tagTitle: TAG_MEDIA;
}>();

const emit = defineEmits<{
  (event: 'change-tag', tagTitle: TAG_MEDIA): void;
}>();

const emitEventChangeTag = (): void => {
  if (props.tagActive) return;

  emit('change-tag', props.tagTitle);
};

const lengthText = computed<string>(() => `(${props.tagCount})`);
</script>
