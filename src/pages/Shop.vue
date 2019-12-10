<template>
  <section>
    <div class="container">
      <ul class="cards">
        <ShopItem v-for="(item, index) in shopList" :key="index" :item="item"></ShopItem>
      </ul>
    </div>
  </section>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
  name: "Shop",
  components: {
    ShopItem
  },
  data() {
    return {
      shopList: null
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
  }
};
</script>