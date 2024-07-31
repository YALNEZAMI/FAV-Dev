import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => {
    return {
      services: [
        {
          title: "DEVELOPEMENT",
          sentences: [
            "Crétion de site web sur mesure 🌐",
            "Par les dernières technologies 💻",
          ],
          url: "/developpement",
          image:
            "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
        },
        {
          title: "Maintenance",
          sentences: [
            "Bugs informatiques d'un site 👾",
            "Failles de sécurité à résoudre 🥷",
          ],
          url: "/maintenance",
          image:
            "https://cdn.pixabay.com/photo/2022/11/06/18/56/blackout-7574763_1280.jpg",
        },
        {
          title: "Refonte/Restyle",
          sentences: [
            "Nouvelles fonctionnalités ⚒️",
            "Restylisation l'interface du site 🌈",
          ],
          url: "/refonte",
          image:
            "https://cdn.pixabay.com/photo/2016/09/13/05/50/gears-1666499_640.jpg",
        },
      ],
    };
  },
  actions: {
    setServices(s: any) {
      this.services = s;
    },
  },
});
