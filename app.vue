<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Fav-Dev',
  meta: [
    {
      name: 'description',
      content: 'Fav-Dev, solutions web et numériques premium.',
    },
  ],
});
</script>
