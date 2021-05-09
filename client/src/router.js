import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/equipo",
      name: "equipo",
      component: () => import("./views/Equipo.vue")
    },
    {
      path: "/equipo/:id",
      name: "editar",
      component: () => import("./components/equipo/EquipoEdit.vue")
    },
    {
      path: "/registrar",
      name: "reguistrar",
      component: () => import("./components/equipo/EquipoRegister.vue")
    }
  ]
});
