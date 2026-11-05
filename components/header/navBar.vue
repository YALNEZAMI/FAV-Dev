<template>
  <nav class="border-b border-white/10 bg-slate-950/90 backdrop-blur-sm">
    <div class="mx-auto flex max-w-7xl flex-row-reverse items-center justify-end gap-2 px-4 py-3 sm:px-6 lg:px-8">
      <div
        v-for="route in routes"
        :key="route.url"
        class="scrollDownParent relative"
      >
        <div
          class="flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-violet-400/70 hover:bg-violet-500/10 hover:text-white"
          :class="{
            'border-violet-400/70 bg-violet-500/10 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.35)]': isRouteMatch(route),
          }"
        >
          <img
            @click="useRouter().push(route.url)"
            v-if="route.img"
            :src="route.img"
            alt=""
            class="h-6 w-8 rounded-md object-cover"
          />
          <NuxtLink v-if="route.type == 'direct'" :to="route.url" class="tracking-wide">{{ route.name }}</NuxtLink>
          <span v-else class="tracking-wide">{{ route.name }}</span>
          <svg
            v-if="route.type == 'scroll'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div
          class="scrollDownChild absolute left-0 top-12 z-50 hidden min-w-52 flex-col rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-slate-950/50"
          v-if="route.type == 'scroll'"
        >
          <div
            v-for="route2 in route.routes"
            :key="route2.name"
            class="rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-violet-500/10 hover:text-white"
            :class="{
              'bg-violet-500/10 text-white': currentRoute.path == route2.url,
            }"
          >
            <NuxtLink v-if="route2.type != 'scroll'" :to="route2.url" class="block">{{ route2.name }}</NuxtLink>
            <div v-else class="relative scrollDownParent2 flex items-center justify-between gap-2">
              <NuxtLink :to="route2.url" class="block">{{ route2.name }}</NuxtLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div
                style="right: 8.55rem"
                class="scrollDownChild2 absolute top-0 hidden flex-col rounded-xl border border-white/10 bg-slate-950 p-2 text-slate-200"
              >
                <div v-for="route3 in route2.routes" :key="route3.name" class="rounded-lg px-2 py-1 hover:text-violet-300">
                  <NuxtLink :to="route3.url">{{ route3.name }}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.scrollDownParent:hover .scrollDownChild {
  display: flex;
}
.scrollDownParent2:hover .scrollDownChild2 {
  display: flex;
}
</style>
<script lang="ts" setup>
const currentRoute = useRoute();
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
        routes: [{ name: "test", url: "/test", type: "direct" }],
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
