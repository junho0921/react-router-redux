/*
state设计模式 = {
	products: {
		id:  {
			title: ...,
			numbern: ...,
			src: ...,
		},
		...,
		...
	}
}
*/
/*actionType*/
import {ADD_PRODUCT, GET_PRODUCTS} from "../action/index";

export const products = (state = {}, action) => {
	if(action.type === GET_PRODUCTS) {
		// 获取到产品数据的
		const allProduct = {};
		action.data.forEach(function(data){
			// number属性是用户选择商品的数量
			data.number = 0;
			allProduct[data.id] = data;
		})
		return allProduct;
	}else if(action.type === ADD_PRODUCT) {
		// 获取到产品数据的
		const activeItem = state[action.productId];
		if(activeItem){
			const newActiveItem = Object.assign({...activeItem});
			newActiveItem.number++;
			return Object.assign(
				{...state}, 
				{[newActiveItem.id]: newActiveItem}
			);
		}
	}
	return state
};