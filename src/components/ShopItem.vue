<template>
	<li class="cards__item">
		<router-link class="cards__link" :to="`shop/${item.id}`">
			<h3>{{ item.title }}</h3>
			<p>{{ item.descr }}</p>
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