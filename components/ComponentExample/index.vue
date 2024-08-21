<template>
  <h1 class="text-primary">{{ text }}</h1>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Hello World");
</script>
