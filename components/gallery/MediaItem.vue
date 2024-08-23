<template>
  <gallery-media-modal>
    <div
      v-if="!mediaTypeVideo"
      class="cursor-pointer relative h-[104px] w-[104px] md:h-[254px] md:w-[254px] hover:scale-105 transition-all">
      <img
        class="h-full w-full object-cover rounded-[4px]"
        :src="mediaItemSrc" />
    </div>
    <div
      v-if="mediaTypeVideo"
      class="cursor-pointer relative h-[104px] w-[104px] md:h-[254px] md:w-[254px] hover:scale-105 transition-all">
      <video class="rounded-[4px] h-full w-full object-cover">
        <source
          :src="mediaItemSrc"
          type="video/mp4" />
      </video>
      <icons-svg-play
        v-if="mediaTypeVideo"
        class="absolute md:h-12 md:w-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
    </div>
  </gallery-media-modal>
</template>

<script lang="ts" setup>
const props = defineProps<{
  mediaInfo: MediaInfo;
}>();

const mediaTypeVideo = computed<boolean>(() => {
  return props.mediaInfo.mediaType === MEDIA_TYPE.VIDEO;
});

const mediaItemSrc = computed<string>(() => DEV_URLS.get(PLATFORM_CATEGORY.APP)!.concat(props.mediaInfo.url));

provide<{ url: string; typeVideo: boolean }>(PROVIDER_KEY.MEDIA_SELECTED, {
  url: mediaItemSrc.value,
  typeVideo: mediaTypeVideo.value
});
</script>
