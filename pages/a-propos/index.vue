<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <!-- Section d'introduction -->
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-purple-600 text-center mb-4">
        Qui sommes-nous ?
      </h1>
      <p class="text-lg text-gray-700 text-center">
        Nous sommes une équipe de passionnés spécialisés dans la création de
        sites internet modernes et performants. Notre mission est de transformer
        vos idées en réalité numérique.
      </p>
    </div>

    <!-- Section de l'équipe -->
    <div class="mt-16">
      <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">
        Notre équipe
      </h2>

      <div class="flex flex-wrap justify-center space-x-2 md:space-x-4">
        <!-- Membres de l'équipe -->
        <div
          class="bg-white shadow-md rounded-lg p-4 md:p6 text-center md:w-48 w-36"
        >
          <img
            class="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://media.licdn.com/dms/image/v2/D4E35AQFDNXfTvHq-sw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1724314051309?e=1726916400&v=beta&t=MVejm4GFDsnlX74r_EATYdqbgtbSQ2czn2snm3d6N3U"
            alt="Membre de l'équipe"
          />
          <h3 class="text-xl font-semibold text-gray-800">Yaser Alnezami</h3>
          <p class="text-gray-600">Développeur Full Stack</p>
        </div>

        <div
          class="bg-white shadow-md rounded-lg p-4 md:p6 text-center md:w-48 w-36"
        >
          <img
            class="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://scontent-cdg4-3.xx.fbcdn.net/v/t1.6435-9/116334750_377953773171149_864771461754557807_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0KLjyjf4eh8Q7kNvgGNf7xj&_nc_ht=scontent-cdg4-3.xx&_nc_gid=Ang7gsfnVBnJuOJi4b2LXNk&oh=00_AYBTE-CpDlIRWAO5GwK4J_I3qTdJNFNFQMabAUw2BS28yg&oe=670CCF6D"
            alt="Membre de l'équipe"
          />
          <h3 class="text-xl font-semibold text-gray-800">Jules Beck</h3>
          <p class="text-gray-600">Relation client / Marketing</p>
        </div>
      </div>
    </div>

    <!-- Section des services -->
    <div class="mt-16">
      <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">
        Ce que nous faisons
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Service 1 -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-bold text-purple-600 mb-2">
            Développement Web
          </h3>
          <p class="text-gray-700">
            Création de sites internet performants, sécurisés et adaptés à tous
            les appareils.
          </p>
        </div>

        <!-- Service 2 -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-bold text-purple-600 mb-2">Design UX/UI</h3>
          <p class="text-gray-700">
            Conception de designs modernes, intuitifs et centrés sur
            l'expérience utilisateur.
          </p>
        </div>

        <!-- Service 3 -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-bold text-purple-600 mb-2">Maintenance</h3>
          <p class="text-gray-700">
            Corriger et améliorer les fonctionnalités existantes c'est aussi
            garantir au client un produit fiable dans le temps.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
