<template>
  <div class="app">
    <nav class="navbar">
      <ul class="navbar__content">
        <li class="navbar__item" v-for="(link, index) in links" :key="index">
          <router-link class="navbar__link" :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </nav>
		<section class="app__content">

    <router-view></router-view>
		</section>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      links: [
        {
          url: "/",
          title: "home"
        },
        {
          url: "/example",
          title: "example"
				},
      ]
    };
  }
};
</script>
