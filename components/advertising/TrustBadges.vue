<template>
  <div
    v-if="hasTrustData"
    class="text-tag md:mr-0 md:text-sm w-[320px] md:w-[400px] mx-auto mt-3 flex text-center items-center justify-between text-dark-blue font-normal">
    <div
      v-show="props.trustData?.isVerified"
      class="flex h-[70px] md:h-auto w-[100px] items-center justify-between flex-col">
      <icons-svg-verified-dentist class="md:h-10 md:w-10" />
      <p class="md:mt-2">Dentista verificado</p>
    </div>
    <div
      v-show="props.trustData?.secureContact"
      class="flex h-[70px] md:h-auto w-[100px] items-center justify-between flex-col">
      <icons-svg-trusted-contact class="md:h-10 md:w-10" />
      <p class="md:mt-2">Contato confiável</p>
    </div>
    <div
      v-show="props.trustData?.secureProfile"
      class="flex h-[70px] md:h-auto w-[100px] items-center justify-between flex-col">
      <icons-svg-real-medias class="md:h-10 md:w-10" />
      <p class="md:mt-2">Mídias verdadeiras</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  trustData: TrustStatus | undefined;
}>();

const hasTrustData = computed<boolean>(() => {
  const { isVerified, secureContact, secureProfile } = props.trustData!;

  return [isVerified, secureContact, secureProfile].some((item) => item === true);
});
</script>
