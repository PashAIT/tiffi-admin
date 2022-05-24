const routes = [
  {
    path: "/categories",
    component: () => import("../pages/categories.vue"),
    alias: "/",
  },
  {
    path: "/products",
    component: () => import("../pages/products.vue"),
  },
];

export default routes;
