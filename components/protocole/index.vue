<template>
  <article class="group relative h-[20rem] w-full max-w-[20rem] rounded-[2rem] border border-violet-400/20 bg-slate-900/80 p-5 shadow-[0_22px_45px_rgba(15,23,42,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_rgba(109,40,217,0.28)]">
    <div class="absolute inset-x-5 top-0 h-24 rounded-b-[2rem] bg-gradient-to-r from-violet-500/30 via-cyan-400/20 to-transparent blur-2xl"></div>

    <div class="relative z-10 flex justify-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/60 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-violet-500/30">
        {{ protocole.index }}
      </div>
    </div>

    <div class="relative z-10 mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-4 py-3 text-center text-base font-bold text-white shadow-inner shadow-slate-950/60">
      {{ protocole.caption }}
    </div>

    <ul class="relative z-10 mt-5 space-y-2 px-2 text-sm text-slate-200">
      <li
        class="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
        v-for="sentence of protocole.sentences"
        :key="sentence"
      >
        <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
        <span>{{ sentence }}</span>
      </li>
    </ul>
  </article>
</template>
<script setup>
const props = defineProps({
  protocole: Object,
});
const protocole = props.protocole;
useHead({
  title: useRoute().path.replace("/", ""),
});
</script>
