<template>
  <main>
    <div class="flex flex-wrap justify-center sm:my-5">
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
</script>
