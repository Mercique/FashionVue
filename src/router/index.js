import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/cart",
      name: "cartpage",
      component: () => import("../views/CartPage.vue"),
    },
    {
      path: "/dev",
      name: "notfound",
      component: () => import("../views/404Page.vue"),
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("../views/404Page.vue"),
    },
  ],
});

const getTitleByRoutes = (routeName) => {
  return {
    home: "Home | Fashion shop",
    registration: "Registration | Fashion Shop",
    cartpage: "Cart | Fashion shop",
    notfound: "404: Error, page not found or dev!",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name);
});

export default router;