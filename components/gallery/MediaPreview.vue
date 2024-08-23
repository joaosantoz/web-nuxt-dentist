<template>
  <div class="flex max-w-80 md:max-w-screen-gallery mx-auto flex-wrap items-center justify-start gap-1">
    <gallery-media-item
      v-for="media in props.mediaList"
      :key="media.url"
      :media-info="media" />
  </div>
  <gallery-media-modal />
</template>

<script lang="ts" setup>
const props = defineProps<{ mediaList: MediaInfo[] }>();
</script>
