<template>
  <main
    v-if="getRoutes().length >= 1"
    class="flex flex-wrap p-1 border-y-2 border-y-white bg-white w-screen"
  >
    <div class="mx-1">
      <span>Vous êtes ici : </span>
      <NuxtLink to="/" class="underline font-bold hover:opacity-80"
        >Accueil</NuxtLink
      >
    </div>
    <div v-for="route of getRoutes()" :key="route">
      <span>-></span>
      <NuxtLink
        class="mx-1 underline font-bold hover:opacity-80"
        :to="'/' + route"
        >{{ route.charAt(0).toUpperCase() + route.slice(1) }}</NuxtLink
      >
    </div>
  </main>
</template>
<script lang="ts" setup>
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
