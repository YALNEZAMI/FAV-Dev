<template>
  <main class="relative sm:w-96 sm:h-96 mx-auto my-3 h-80">
    <img class="h-full w-full rounded" :src="service.image" alt="" />
    <div class="absolute top-5 left-1 w-full">
      <div
        class="title w-max mx-auto py-4 px-3 rounded-ss-xl rounded-ee-xl bg-purple-200 text-black font-bold text-xl"
      >
        {{ service.title }}
      </div>
    </div>
    <div
      class="containerSentences absolute w-full top-28 left-0 px-1 text-white font-bold text-lg"
    >
      <div
        class="sentence py-4 px-2 w-max rounded-md text-center my-2 bg-black"
        :class="{
          'ml-12': index % 2 != 0,
          'ml-2': index % 2 == 0,
        }"
        v-for="(sentence, index) of service.sentences"
        :key="index"
      >
        {{ sentence }}
      </div>
    </div>

    <NuxtLink
      :to="service.url"
      class="absolute left-0 w-full bottom-4"
      title="Voir le processus en 3 étapes"
    >
      <svg
        style="background: linear-gradient(white, purple)"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="fleche arrow w-12 h-12 hover:h-16 hover:w-16 transition-all duration-200 bg-purple-300 rounded-full hover:bg-purple-600 cursor-pointer mx-auto"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </NuxtLink>
  </main>
</template>
<style scoped>
.title {
  animation: title linear;
  animation-timeline: view(0px 550px);
}
@keyframes title {
  to {
    background-color: black;
  }
}

.containerSentences {
  animation: containerSentences linear;
  animation-timeline: view(0px 100px);
}
@keyframes containerSentences {
  from {
    opacity: 1;
  }
  to {
    padding-left: 20px;
    opacity: 0.3;
  }
}
</style>
<script setup>
const props = defineProps({
  service: Object,
});
const service = props.service;
</script>
