import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";
import DetailView from "../views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "List",
      component: ListView,
    },
    {
      path: "/detail/:tokenID",
      name: "Detail",
      component: DetailView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ListView,
    },
  ],
});

export default router;
