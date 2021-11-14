import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import student from "@/middleware/student";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/user",
    name: "user",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
  },
  {
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import(/* webpackChunkName: "users" */ "../views/Users"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile"),
  },
  {
    path: "/account",
    name: "account",
    meta: { middleware: [auth, student] },
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/Account"),
  },
  {
    path: "/courses",
    name: "courses",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "courses" */ "../views/Courses"),
  },
  {
    path: "/reports",
    name: "reports",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "reports" */ "../views/Reports"),
  },
  {
    path: "/subject",
    name: "subject",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "subject" */ "../views/Subject"),
  },
  {
    path: "/recents",
    name: "recents",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "recents" */ "../views/Recents"),
  },
  {
    path: "/to-do",
    name: "To-Do",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "to-do" */ "../views/To-Do"),
  },
  {
    path: "/connected-apps",
    name: "connected-apps",
    meta: { middleware: [auth] },
    component: () =>
      import(
        /* webpackChunkName: "connected-apps" */ "../views/Connected-Apps"
      ),
  },
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register"),
  },

  {
    path: "/reset-password",
    name: "resetPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/ForgotPassword"
      ),
  },
  {
    path: "/auth/:provider/callback",
    component: {
      template: '<div class="auth-component"></div>',
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
