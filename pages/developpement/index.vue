<template>
  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <section class="mb-10 rounded-[32px] border border-violet-400/20 bg-slate-900/60 p-6 shadow-[0_25px_45px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8">
      <div class="text-center">
        <span class="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Développement</span>
        <h1 class="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Créez un site qui vous ressemble et qui convertit.
        </h1>
      </div>
    </section>

    <div class="grid gap-6 lg:grid-cols-3 lg:items-center">
      <div
        class="flex items-center justify-center gap-3"
        v-for="(protocole, i) of protocoles"
        :key="protocole.index"
      >
        <div class="w-full max-w-[20rem]">
          <Protocole :protocole="protocole"></Protocole>
        </div>
        <svg
          v-if="i != protocoles.length - 1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="hidden h-12 w-12 text-violet-300 lg:block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>

    <div class="mt-10 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 p-4 text-center text-base font-semibold text-white shadow-[0_18px_35px_rgba(109,40,217,0.3)] sm:p-5">
      Commençons par en parler, envoyez-nous un mail
      <a
        class="font-bold underline decoration-white/80 underline-offset-2 transition-opacity hover:opacity-80"
        href="mailto:yaseralnezami@gmail.com"
      >
        ici
      </a>
      !
    </div>
  </main>
</template>
<script lang="ts" setup>
const protocoles = ref([
  {
    index: 1,
    caption: "Discuter du projet",
    sentences: [
      "Objet du site",
      "Fonctionnalités demandées.",

      "Autres spécifications(style...).",
    ],
  },
  {
    index: 2,
    caption: "Accord entreprise/client",
    sentences: [
      "Etablissement d'un devis.",
      "Fixation de délai.",
      "Signature d'un contrat.",
    ],
  },
  {
    index: 3,
    caption: "Passage à l'action",
    sentences: [
      "Début du développement.",
      "Démonstrations de progression.",
      "Modifications sur mesure.",
    ],
  },
]);
</script>
