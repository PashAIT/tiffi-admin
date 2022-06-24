const routes = [
  {
    path: "/login",
    component: () => import("../pages/login/login.vue"),
    alias: "/",
  },
  {
    path: "/forgot-password",
    component: () => import("../pages/login/forgot-password.vue"),
  },
  {
    path: "/reset-password",
    component: () => import("../pages/login/reset-password-for-mail.vue"),
  },
  {
    path: "/categories",
    component: () => import("../pages/categories.vue"),
  },
  {
    path: "/products",
    component: () => import("../pages/products.vue"),
  },
];

export default routes;
