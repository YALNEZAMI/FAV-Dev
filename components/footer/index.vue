<template>
  <main class="bg-black p-3">
    <div class="flex flex-wrap">
      <div class="flex flex-col w-1/2 bg-black p-2">
        <h1 class="font-semibold text-white text-center underline">
          Entreprise
        </h1>
        <NuxtLink
          class="w-max mx-auto hover:text-gray-200 text-gray-300 my-1 text-center"
          v-for="route of routes"
          :key="route.name"
          :to="route.url"
          >{{ route.name }}</NuxtLink
        >
      </div>
      <div class="flex flex-col w-1/2 bg-black p-2">
        <h1 class="font-semibold text-white text-center underline">
          Plan du site
        </h1>
        <NuxtLink
          class="w-max mx-auto hover:text-gray-200 text-gray-300 my-1 text-center"
          v-for="component of components"
          :key="component.name"
          :to="component.url"
          >{{ component.name }}</NuxtLink
        >
      </div>
    </div>
    <hr />
    <div
      class="flex justify-center space-x-4 bg-black text-white underline p-2"
    >
      <!--mail-->
      <a title="Aller sur Gmail" href="mailto:yaseralnezami@gmail.com"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-7 text-red-300 hover:opacity-80"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </a>
      <!--whatsapp-->
      <a
        title="Aller sur WhatsUp"
        href="https://wa.me/+33767566603?text=Bonjour Yasser, je suis intéréssé par tes services. Peut-on convenire d'un rendez-vous ? Bien cordialement"
        target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-whatsapp text-green-300 hover:opacity-80"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
          /></svg
      ></a>
      <!--facebook-->
      <!--<a href="https://www.facebook.com/yasr.alnzamy.7/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-facebook text-blue-300 hover:opacity-80"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
          />
        </svg>
      </a>-->
      <!--linkedin-->
      <a
        target="_blank"
        title="Aller sur Linkedin"
        href="https://www.linkedin.com/in/yaser-alnezami/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-linkedin text-blue-500"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          /></svg
      ></a>
    </div>
    <hr />
    <div class="flex justify-center bg-black text-white text-center p-2">
      Tous droits réservés - 2024
      <img
        class="w-7 h-5 mx-2 my-1"
        src="https://i.ibb.co/g9zJ7j2/fav-dev-logo.png"
        alt=""
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
const routes = ref([
  {
    url: "/a-propos",
    name: "A propos",
  },
  {
    url: "/politique",
    name: "Politique",
  },
  {
    url: "/mentions-legales",
    name: "Mensions légales",
  },
]);
const components = ref([
  {
    url: "/",
    name: "Accueil",
  },
  {
    url: "/developpement",
    name: "Developpement",
  },
  {
    url: "/maintenance",
    name: "Maintenance",
  },
  {
    url: "/refonte",
    name: "Refonte",
  },
]);
</script>
