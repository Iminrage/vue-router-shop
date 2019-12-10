<template>
	<ul class="cards">
		<ShopItem v-for="(item, index) in shopList" :key="index" :item="item"></ShopItem>
	</ul>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue'
export default {
	name: "Shop",
	components: {
		ShopItem
	},
	data(){
		return{
			shopList: null
		}
	},
	created(){
		this.shopList = this.$store.getters.getShopList;
	}
}
</script>