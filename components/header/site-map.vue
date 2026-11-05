<template>
  <nav
    v-if="getRoutes().length >= 1"
    class="border-b border-white/10 bg-slate-900/60 backdrop-blur-sm"
  >
    <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-slate-300 sm:px-6 lg:px-8">
      <span class="hidden font-medium text-slate-400 md:inline">Vous êtes ici :</span>
      <NuxtLink
        to="/"
        id="accueil-route"
        class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-semibold text-slate-200 transition hover:border-violet-400/60 hover:text-white"
      >
        Accueil
      </NuxtLink>
      <template v-for="route of getRoutes()" :key="route">
        <span class="text-slate-500">/</span>
        <NuxtLink
          class="rounded-full border border-transparent px-2.5 py-1 font-medium text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          :to="'/' + route"
        >
          {{ (route.charAt(0).toUpperCase() + route.slice(1)).replaceAll("-", " ") }}
        </NuxtLink>
      </template>
    </div>
  </nav>
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
