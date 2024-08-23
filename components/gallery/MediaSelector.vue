<template>
  <div class="flex items-center w-80 mx-auto justify-between max-w-screen-[300px] my-5">
    <gallery-media-tag
      v-for="tag in tagData"
      :tag-active="checkTagActive(tag.title)"
      :tag-count="tag.count"
      :tag-title="tag.title"
      :key="tag.title"
      @change-tag="setNewTag" />
  </div>
</template>

<script lang="ts" setup>
const { activeTag, tagData, setActiveTag } = inject<TagSelectorComposable>(PROVIDER_KEY.TAG_SELECTOR)!;

const emit = defineEmits<{
  (event: 'filter-gallery', tag: TAG_MEDIA): void;
}>();

const checkTagActive = (tagMedia: TAG_MEDIA): boolean => {
  return tagMedia === activeTag.value;
};

const setNewTag = (tagTitle: TAG_MEDIA) => {
  setActiveTag(tagTitle);
  emit('filter-gallery', tagTitle);
};
</script>
