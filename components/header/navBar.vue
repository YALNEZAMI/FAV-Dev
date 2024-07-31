<template>
  <main
    class="flex flex-row-reverse text-white space-x-4 p-2 bg-black underline"
  >
    <div
      v-for="route in routes"
      :key="route.url"
      class="scrollDownParent relative mx-2 hover:bg-white hover:text-black rounded px-2 md:my-1 md:mx-2"
      :class="{
        'bg-white text-black': currentRoute.path == route.url,
      }"
    >
      <div class="flex cursor-pointer">
        <NuxtLink v-if="route.type == 'direct'" :to="route.url">{{
          route.name
        }}</NuxtLink>
        <span v-else>{{ route.name }}</span>
        <!--arrow icon-->
        <svg
          v-if="route.type == 'scroll'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 pt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <!--scroll down section-->
      <div
        class="scrollDownChild hidden flex-col absolute left-0 top-6 bg-white text-black p-1"
        v-if="route.type == 'scroll'"
      >
        <div
          v-for="route2 in route.routes"
          :key="route2.name"
          class="hover:bg-black hover:text-white p-1 rounded cursor-pointer"
          :class="{
            'bg-black text-white': currentRoute.path == route2.url,
          }"
        >
          <NuxtLink :to="route2.url">{{ route2.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.scrollDownParent:hover .scrollDownChild {
  display: flex;
}
</style>
<script lang="ts" setup>
const currentRoute = useRoute();
// const router = useRouter();
console.log("currentroute", currentRoute);
const routes = ref([
  {
    name: "Accueil",
    url: "/",
    type: "direct",
  },
  {
    name: "Services",
    url: "#",
    type: "scroll",
    routes: [
      {
        name: "Développement",
        url: "/developpement",
        type: "direct",
      },
      {
        name: "Maintenance",
        url: "/maintenance",
        type: "direct",
      },
      {
        name: "Refonte",
        url: "/refonte",
        type: "direct",
      },
    ],
  },
]);

onMounted(async () => {
  setInterval(() => {}, 1000);
});
</script>
