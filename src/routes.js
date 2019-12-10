import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "@/pages/Home";
import Error404 from "@/pages/error404";
import Example from "@/pages/Example";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/example",
      name: "Example",
      component: Example
		},
		{
			path: "/shop",
			name: "Shop",
			component: Shop
		},
		{
			path: "/shop/:id",
			name: "Product",
			component: Product
		},
		{
      path: "*",
      name: "notFound",
      component: Error404
    }
  ]
});
