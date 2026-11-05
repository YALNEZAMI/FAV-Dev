<template>
  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <section class="mb-10 rounded-[32px] border border-violet-400/20 bg-slate-900/60 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8">
      <div class="flex flex-col gap-4 text-center sm:text-left">
        <span class="inline-flex w-max items-center self-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:self-start">Création web premium</span>
        <h1 class="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Des solutions digitales qui donnent de la <span class="bg-gradient-to-r from-violet-300 via-cyan-300 to-violet-200 bg-clip-text text-transparent">valeur</span>
        </h1>
        <p class="max-w-2xl text-base text-slate-300 sm:text-lg">
          Nous concevons des sites et outils digitaux élégants, performants et pensés pour convertir vos visiteurs en clients.
        </p>
      </div>
    </section>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Service
        class="transition-all duration-500"
        v-for="(service, index) of store.services"
        :key="index"
        :service="service"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from "~/store/store";

const store = useStore();
useHead({
  title: "Accueil",
});
</script>
