<template>
  <main
    style="background: linear-gradient(45deg, purple, blue)"
    class="z-20 bg-purple-600 rounded-full p-5 h-80 w-80 shadow-lg"
  >
    <div class="bg-white w-max p-4 rounded-full px-6 mx-auto text-xl font-bold">
      _{{ protocole.index }}_
    </div>
    <br />
    <div
      class="mx-auto text-center bg-black text-white py-2 lg:w-3/4 rounded mb-4 font-semibold"
    >
      {{ protocole.caption }}
    </div>
    <ul class="mx-3 underline text-white md:ml-3">
      <li class="my-1" v-for="sentence of protocole.sentences" :key="sentence">
        - {{ sentence }}
      </li>
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  protocole: Object,
});
const protocole = props.protocole;
</script>
