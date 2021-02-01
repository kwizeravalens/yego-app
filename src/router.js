import Vue from "vue";
import Router from "vue-router";
import store from "./store";
Vue.use(Router);
const router = new Router({
  //ode: "history",
  base: process.env.BASE_URL,
  routes: [
    /*
    | Routers for Index
    */
    {
      path: "/",
      name: "landing",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/Landing.vue"),
      meta: {},
    },
    {
      path: "/register",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/SignUp.vue"),
      meta: {},
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/Login.vue"),
      meta: {},
    },
    {
      path: "/driver-account",
      name: "account",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/DriverAccount.vue"),
      meta: {
        requiresUserAuth: true,
      },
    },
    {
      path: "/cars",
      name: "cars",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/Cars.vue"),
      meta: {
        requiresUserAuth: true,
      },
    },
    {
      path: "/requests",
      name: "requests",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/Requests.vue"),
      meta: {
        requiresUserAuth: true,
      },
    },
    {
      path: "/change-password",
      name: "accountchangepassword",
      component: () =>
        import(/* webpackChunkName: "Account" */ "./views/ChangePassword.vue"),
      meta: {
        requiresUserAuth: true,
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresUserAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    window.location.replace("/login");
  } else if (to.matched.some((record) => record.meta.requiresCustomerAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    window.location.replace("/login");
  } else {
    next();
  }
});
router.afterEach(() => {
  Vue.nextTick(() => {
    if (store.state.toggled) store.state.toggled = false;
    let wrapper = document.getElementById("app-wrapper");
    if (wrapper) wrapper.classList.remove("toggled");
  });
});
export default router;
