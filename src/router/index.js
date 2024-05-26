import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "./dashboard/index";
import AuthenticateRoutes from "./authenticate/index";
import Authenticate from '../views/AuthenticateView.vue';
import Users from "./user/index";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
        ...Dashboard,
        ...Users,
    ],
    meta: {
      requiresAuth: true,
      title: "Home"
    }
  },
  {
    path: "/",
    name: "authenticate",
    component: Authenticate,
    children: [
        ...AuthenticateRoutes,
    ],
  },
  
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.meta.title || ''}`;
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("token")) {
      next("/login");
    } else {
      // Check if the current route is the main route and not a child route
      if (to.path === "/") {
        // Redirect to a specific child route if authenticated
        next("/dashboard");
      } else {
        next();
      }
    }
  } else if (!to.meta.requiresAuth && localStorage.getItem("token")) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
