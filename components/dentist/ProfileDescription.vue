<template>
  <section class="relative bg-white text-dark-blue">
    <article class="p-5 md:py-8 max-w-screen-text mx-auto">
      <div class="flex items-center">
        <icons-description-section class="md:h-8 md:w-8" />
        <h2 class="text-md font-semibold ml-2 md:text-lg">Descrição</h2>
      </div>
      <p class="text-base mt-7 md:hidden">{{ descriptionToShow }}</p>
      <p class="text-base mt-5 hidden md:block">{{ profileDescription }}</p>
    </article>
    <shared-show-more 
      v-if="showSeeMore" 
      v-model="openDescription" 
      class="md:hidden"
    />
  </section>
</template>

<script lang=ts setup>
const props = defineProps<{
  profileDescription: string;
}>()

const openDescription = ref<boolean>(false);

const showSeeMore = computed<boolean>(() => {
  return props.profileDescription.length > DESCRIPTION_LIMIT;
})

const descriptionToShow = computed<string>(() => {
  if (openDescription.value) {
    return props.profileDescription;
  }

  return props.profileDescription.slice(0, DESCRIPTION_LIMIT);
})
</script>