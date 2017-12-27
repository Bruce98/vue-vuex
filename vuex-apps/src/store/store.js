import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true,
	//获取数据
	state:{
		products:[
            {name:"马云",price:200},
            {name:"马化腾",price:140},
            {name:"马冬梅",price:20},
            {name:"马蓉",price:10}
        ]
	},
	//更改数据
	getters:{
		saleProducts:(state)=>{
				var saleProducts = state.products.map(product =>{
              return {
                name: "**"+product.name+"**",
                price: product.price/2
              }
            });
          return saleProducts
		}
	
	},
	//事件触发
	mutations: {
        reducePrice:(state,payload)=>{
          state.products.forEach(product=>{
             product.price-= payload
      });
    }  
  },
  actions:{
  	reducePrice:(content,payload)=>{
  		setTimeout(function(){
  			content.commit("reducePrice",payload)
  		},200)
  	}
  }
});