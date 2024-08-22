<template>
  <div class="h-16 relative -bottom-1/5 left-0 w-full border-t border-[#C6C9CA] bg-white flex items-center justify-center">
    <div v-if="!componentActive" class="bg-white-shadow h-full w-full absolute -top-16 left-0"></div>
      <div @click="componentActive = !componentActive" class="flex cursor-pointer h-full w-full items-center justify-center">
      <h3 class="mr-2 v-attr text-md">{{ buttonText }}</h3>
      <icons-arrow-show :class="{ 'rotate-180': componentActive }" class="transition-all"  />
    </div>
  </div>
</template>

<script lang=ts setup>
const componentActive = defineModel<boolean>({ 
  required: true, default: false 
});

const buttonText = computed<string>(() => componentActive.value ? 'Ver menos' : 'Ver mais');

</script>
