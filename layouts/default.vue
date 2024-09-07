<template>
  <main>
    <Header class="fixed left-0 top-0 w-full z-50"></Header>
    <div
      class="bg-pink-100 pb-2"
      :class="{
        'pt-48': path != '/',
        'pt-44': path == '/',
      }"
      style="min-height: 600px"
    >
      <slot></slot>
    </div>
    <Footer></Footer>
  </main>
</template>
<script lang="ts" setup>
const route = useRoute();
const path = route.path;
</script>
