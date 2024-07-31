<template>
  <main class="flex flex-wrap p-1 border-y-2 border-y-white bg-white w-screen">
    <div class="mx-1 underline"><NuxtLink to="/">Accueil</NuxtLink></div>
    <div v-for="route of getRoutes()" :key="route">
      <span>-></span>
      <NuxtLink class="mx-1 underline" :to="'/' + route">{{
        route.charAt(0).toUpperCase() + route.slice(1)
      }}</NuxtLink>
    </div>
  </main>
</template>
<script lang="ts" setup>
console.log("mina");
const getRoutes = () => {
  let route = useRoute();
  let path = route.path;
  let split = path.split("/");
  const res = split.filter((route: string) => {
    return route != "";
  });
  return res;
};
</script>
