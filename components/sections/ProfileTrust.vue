<template>
  <section class="relative my-6 p-5 md:p-8 bg-white max-w-screen-desktop mx-auto">
    <div class="max-w-screen-text mx-auto">
      <h1 class="text-dark-blue font-semibold mb-3 md:mb-10 text-center md:text-left text-md">Confiança do anúncio:</h1>
      <div class="md:flex md:justify-between md:items-center">
        <div class="md:py-5">
          <advertising-trust-bar :status-trust="statusTrust" />
          <advertising-trust-status :trust-portion="trustPortion" />
        </div>
        <advertising-trust-badges :trust-data="trustData" />
      </div>
    </div>
    <div class="absolute hidden md:block h-[60px] w-[1px] bottom-[15%] left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#C6C9CA]"></div>
  </section>
</template>

<script lang="ts" setup>
import { MAX_RANGE_STATUS_BAR } from '~/constants/MaxRangeStatusBar.constant';

const trustData = inject<TrustStatus>(PROVIDER_KEY.TRUST_STATUS);

const statusTrust = ref<NonNullable<number>>(trustData!.statusLevel);

const oneThird = computed<number>(() => MAX_RANGE_STATUS_BAR / 3);
const twoThird = computed<number>(() => 2 * oneThird.value);

const trustPortion = computed<TRUST_RANGE>(() => {
  if (statusTrust.value < oneThird.value) {
    return TRUST_RANGE.ONE_THIRD;
  }

  if (statusTrust.value <= twoThird.value) {
    return TRUST_RANGE.TWO_THIRD;
  }

  return TRUST_RANGE.FULL;
});
</script>
