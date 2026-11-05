<template>
  <article class="group relative mx-auto my-4 h-[22rem] w-full max-w-[22rem] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-[0_20px_45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(109,40,217,0.25)]">
    <img class="h-full w-full object-cover transition duration-500 group-hover:scale-105" :src="service.image" alt="" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10"></div>

    <div class="absolute left-0 right-0 top-5 px-4">
      <div class="title mx-auto w-max max-w-[85%] rounded-full border border-violet-300/50 bg-gradient-to-r from-violet-200 via-violet-100 to-cyan-100 px-4 py-2 text-center text-base font-black text-slate-900 shadow-lg shadow-violet-500/10">
        {{ service.title }}
      </div>
    </div>

    <div class="containerSentences absolute inset-x-0 top-24 px-3 text-white">
      <div
        class="sentence my-2 w-max max-w-[75%] rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm font-semibold backdrop-blur-sm"
        :class="{
          'ml-auto': index % 2 != 0,
          'mr-auto': index % 2 == 0,
        }"
        v-for="(sentence, index) of service.sentences"
        :key="index"
      >
        {{ sentence }}
      </div>
    </div>

    <NuxtLink
      :to="service.url"
      class="absolute inset-x-0 bottom-5 flex justify-center"
      title="Voir le processus en 3 étapes"
    >
      <span class="flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/50 bg-gradient-to-br from-white via-violet-100 to-violet-300 text-slate-900 shadow-lg shadow-violet-500/20 transition-all duration-200 hover:h-16 hover:w-16 hover:bg-gradient-to-br hover:from-violet-200 hover:to-violet-500 hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </span>
    </NuxtLink>
  </article>
</template>
<style scoped>
.title {
  animation: title linear;
  animation-timeline: view(0px 550px);
}
@media screen and (max-width: 785px) {
  @keyframes title {
    to {
      background-color: rgba(15, 23, 42, 0.9);
      color: white;
    }
  }

  .containerSentences {
    animation: containerSentences linear;
    animation-timeline: view(0px 100px);
  }
  @keyframes containerSentences {
    from {
      opacity: 1;
      padding-left: 0px;
    }
    to {
      padding-left: 8px;
      opacity: 0.45;
    }
  }
}
</style>
<script setup>
const props = defineProps({
  service: Object,
});
const service = props.service;
useHead({
  title: service.title,
});
</script>
