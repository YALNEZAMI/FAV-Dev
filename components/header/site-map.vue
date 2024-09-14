<template>
  <main
    v-if="getRoutes().length >= 1"
    class="flex border-y-2 border-gray-300 flex-wrap p-1 bg-white w-screen"
  >
    <div class="mx-1 flex">
      <span class="md:block hidden mx-1">Vous êtes ici : </span>
      <NuxtLink
        to="/"
        id="accueil-route"
        class="md:text-base text-sm underline font-bold hover:opacity-70"
        >Accueil</NuxtLink
      >
    </div>
    <div v-for="route of getRoutes()" :key="route">
      <span class="md:text-base text-sm">-></span>
      <NuxtLink
        class="md:text-base text-sm mx-1 underline font-bold hover:opacity-70"
        :to="'/' + route"
        >{{
          (route.charAt(0).toUpperCase() + route.slice(1)).replaceAll("-", " ")
        }}</NuxtLink
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
<style scoped>
@media screen and (max-width: 770px) {
  #accueil-route {
    margin-top: 3px;
  }
}
</style>
