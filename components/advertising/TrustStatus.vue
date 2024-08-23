<template>
  <div class="text-tag md:text-sm flex items-center w-[320px] md:w-[400px] mx-auto md:mx-0 justify-between mt-1 text-[#5D7A89] font-normal">
    <p
      class="data-[active='true']:font-semibold data-[active='true']:underline data-[active='true']:text-dark-blue h-5"
      :data-active="props.trustPortion === TRUST_RANGE.ONE_THIRD">
      Pouco confiável
    </p>
    <p
      class="data-[active='true']:font-semibold data-[active='true']:underline data-[active='true']:text-dark-blue h-5"
      :data-active="props.trustPortion === TRUST_RANGE.TWO_THIRD">
      Confiável
    </p>
    <p
      class="data-[active='true']:font-semibold data-[active='true']:underline data-[active='true']:text-dark-blue h-5"
      :data-active="props.trustPortion === TRUST_RANGE.FULL">
      Muito confiável
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  trustPortion: TRUST_RANGE;
}>();
</script>
