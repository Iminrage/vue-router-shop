<template>
  <div class="product">
    <div class="container">
			<h2>{{ product.title }}</h2>
			<p>{{ product.descr }}</p>
			<img :src="product.img" :alt="product.title">
		</div>
  </div>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      product: null
    };
  },
  created() {
		let id = this.$route.params.id
		this.product = this.$store.getters.getProduct(id)	
  }
};
</script>