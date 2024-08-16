<template>
  <div>
    <ComponentExample />
  </div>
</template>

<script setup>
import { ref } from "vue";

import ComponentExample from "@/components/ComponentExample"

const sentenceExample = ref("Profile Page");
</script>
