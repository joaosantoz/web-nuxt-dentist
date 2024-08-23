<template>
  <section class="p-5 md:px-0 md:py-8 mt-6 md:mt-16 bg-white max-w-screen-desktop mx-auto">
    <gallery-media-header />
    <gallery-media-selector @filter-gallery="filterGallery" />
    <gallery-media-preview :media-list="filteredGalleryList" />
    <gallery-media-load
      v-if="showLoadMoreButton"
      @click="loadMoreMedia(activeMediaType)" />
  </section>
</template>

<script lang="ts" setup>
const { filteredGalleryList, showLoadMoreButton, filterMediaList, loadMoreMedia } = useGalleryLoader();
const { activeTag, tagData, activeMediaType, setActiveTag } = useTagSelector();

const filterGallery = (newTag: TAG_MEDIA) => {
  filterMediaList(activeMediaType.value);
  setActiveTag(newTag);
};

provide(PROVIDER_KEY.TAG_SELECTOR, {
  activeTag,
  tagData,
  setActiveTag
});
</script>
