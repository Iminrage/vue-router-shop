export default{
	state: {
		shopList: [
			{
				id: 1,
				title: "ACG",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/nikeacg.jpg')
			},
			{
				id: 2,
				title: "M2K",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/m2k.webp')
			}
		]
	},
	mutations:{

	},
	actions: {

	},
	getters: {
		getShopList(state){
			return state.shopList
		}
	}
}