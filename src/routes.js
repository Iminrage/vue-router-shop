import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "@/components/Home";
import Error404 from "@/components/error404";
import Example from "@/components/Example";

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
      path: "*",
      name: "notFound",
      component: Error404
    }
  ]
});
