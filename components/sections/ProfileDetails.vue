<template>
  <section class="h-[280px] my-6 md:mt-0 md:mb-16 py-9 flex justify-center items-center">
    <div class="flex flex-col items-center justify-center">
      <img
        :src="profileImage"
        class="object-cover rounded-full border-primary border-x-4 border-y-4 h-36 w-36" />
      <div class="flex mt-4 text-dark-blue flex-col items-center justify-center">
        <h1 class="text-[20px] md:text-xl font-semibold h-6">
          {{ dentistTitle }}
        </h1>
        <h3 class="text-base md:text-base mt-2 italic h-4">
          {{ dentistSpecialty }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  dentistSpecialty: string;
}>();

const dentistTitle = inject<string>(PROVIDER_KEY.PROFILE_TITLE);
const profileImage = inject<string>(PROVIDER_KEY.PROFILE_PHOTO);
</script>
