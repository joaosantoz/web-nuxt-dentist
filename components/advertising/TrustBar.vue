<template>
  <div class="min-h-5 w-[320px] md:w-[400px] mx-auto md:mx-0 bg-[#eceff1] rounded-3xl relative">
    <div class="h-3.5 bg-gradient-to-r top-1/2 left-1 -translate-y-1/2 progress-bar from-[#5EBBA4] to-[#43A047] absolute max-w-[98%] rounded-3xl"></div>
    <div class="absolute border-l border-dotted opacity-50 border-dark-blue h-3 w-0.5 top-1 left-1/3"></div>
    <div class="absolute border-r border-dotted opacity-50 border-dark-blue h-3 w-0.5 top-1 left-2/3"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  statusTrust: number;
}>();
</script>

<style>
.progress-bar {
  animation: progress-animation 8s forwards;
  animation-fill-mode: both;
}

@keyframes progress-animation {
  0% {
    width: 0%;
  }
  100% {
    width: v-bind(statusTrust + '%');
  }
}
</style>
