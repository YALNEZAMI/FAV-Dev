<template>
  <main>
    <div class="lg:flex m-2 w-11/12 lg:w-full mx-auto lg:justify-center">
      <div
        class="lg:flex justify-center lg:w-1/3"
        v-for="(protocole, i) of protocoles"
        :key="protocole.index"
      >
        <div class="flex justify-center lg:w-3/4">
          <Protocole :protocole="protocole"></Protocole>
        </div>
        <div
          v-if="i != protocoles.length - 1"
          class="lg:items-center flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-14 my-2 lg:-rotate-90 lg:ml-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="my-4 text-center bg-blue-600 text-white p-2 font-semibold">
      Commençons par en parler, envoyez-nous un mail
      <a class="text-black underline" href="mailto:yaseralnezami@gmail.com"
        >ici</a
      >
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
