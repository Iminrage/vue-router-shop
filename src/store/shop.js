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
			},
			{
				id: 3,
				title: "M2K",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/m2k.webp')
			},
			{
				id: 4,
				title: "M2K",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/m2k.webp')
			},
			{
				id: 5,
				title: "M2K",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/m2k.webp')
			},
			{
				id: 6,
				title: "M2K",
				descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, provident?',
				img: require('@/assets/img/m2k.webp')
			},
		]
	},
	mutations:{

	},
	actions: {

	},
	getters: {
		getShopList(state){
			return state.shopList
		},
		getProduct: (state) => (id)=>{
			return state.shopList.find(
				el => el.id == id
			);
		}
			
		
	}
}