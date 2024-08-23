<template>
  <div @click="modalOpen = true">
    <slot />
  </div>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="modalOpen"
        @click="modalOpen = false"
        class="z-40 md:bg-[#01071F99] h-screen w-screen fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div class="h-full md:bg-black w-full md:h-[700px] md:w-[820px] md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
          <img
            v-if="!mediaSelected.typeVideo"
            class="h-full w-full object-cover md:object-contain transition-all"
            :src="mediaSelected.url" />
          <video
            v-if="mediaSelected.typeVideo"
            @click="alternateVideoState"
            ref="videoPlayer"
            class="h-full w-full object-cover md:object-contain transition-all cursor-pointer relative"
            autoplay
            controls
            loop>
            <source
              :src="mediaSelected.url"
              type="video/mp4" />
          </video>
          <icons-svg-play
            @click="alternateVideoState"
            class="absolute hover:scale-105 transition-all cursor-pointer h-16 w-16 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            :class="[hidePlayIcon ? 'invisible' : 'visible']" />
          <gallery-media-title @close-modal="modalOpen = false" />
          <icons-svg-close
            @click="modalOpen = false"
            class="cursor-pointer hidden md:block absolute top-5 right-5 hover:scale-105 transition-all" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
const mediaSelected = inject<{ url: string; typeVideo: boolean }>(PROVIDER_KEY.MEDIA_SELECTED, { url: '', typeVideo: false });
const modalOpen = ref<boolean>(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);
const hidePlayIcon = ref<boolean>(true);

const alternateVideoState = (): void => {
  hidePlayIcon.value = !hidePlayIcon.value;

  if (videoPlayer.value?.paused) {
    videoPlayer.value.play();

    return;
  }

  videoPlayer.value?.pause();
};

watch(
  () => modalOpen.value,
  (currentValue, previousValue) => {
    useScrollLock(currentValue, previousValue);
  }
);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
