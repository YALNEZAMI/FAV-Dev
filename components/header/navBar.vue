<template>
  <main class="flex flex-row-reverse text-white space-x-4 p-2 bg-black">
    <div
      v-for="route in routes"
      :key="route.url"
      class="scrollDownParent relative mx-2 hover:text-purple-300 hover:underline rounded px-1 md:my-1 md:mx-2"
      :class="{
        ' text-purple-400': isRouteMatch(route),
      }"
    >
      <div class="flex cursor-pointer">
        <img v-if="route.img" :src="route.img" alt="" class="w-10 h-7" />
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
          class="hover:text-purple-400 hover:underline p-1 rounded cursor-pointer"
          :class="{
            'text-purple-600 underline': currentRoute.path == route2.url,
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
const routes = ref([
  {
    name: "Accueil",
    url: "/",
    type: "direct",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovJELHeYS9I4sLCte2d6md5b9rWS5CriVjA&s",
  },
  {
    name: "Services",
    url: "#",
    type: "scroll",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1mWPVcRGCy5WVWhdZp_usZoWaFkjzgfAmA&s",
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

const isRouteMatch = (r: any) => {
  let res = false;

  if (currentRoute.path == r.url) {
    res = true;
  }
  if (r.routes) {
    r.routes.map((r2: any) => {
      if (currentRoute.path == r2.url) {
        res = true;
      }
    });
  }
  return res;
};
</script>
