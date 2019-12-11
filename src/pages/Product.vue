<template>
  <div class="product">
    <div class="container">
      <div class="product__main-content">
        <img :src="product.img" :alt="product.title" />
        <h2 class="product__title">{{ product.title }} {{ product.id }}</h2>
      </div>
      <div class="product__other-content">
        <p class="product__descr">{{ product.descr }}</p>
      </div>
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
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  }
};
</script>