<template>
  <div class="min-h-screen bg-light-grey flex flex-col">
    <shared-app-header />
    <main class="flex-grow">
      <slot />
    </main>
    <shared-app-footer />
  </div>
</template>
