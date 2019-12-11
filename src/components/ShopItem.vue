<template>
	<li class="cards__item">
		<router-link class="cards__link" :to="`shop/${item.id}`">
			<h3 class="cards__title">{{ item.title }}</h3>
			<img class="cards__img" :src="item.img" :alt="item.title">
		</router-link>
	</li>
</template>
<script>
export default {
	name: "ShopItem",
	props: {
		item: {
			type: Object
		}
	},
	data(){
		return{

		}
	},
}
</script>