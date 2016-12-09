/**
 * Created by jiajunhe on 2016/12/7.
 */
/*actionType*/
export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
/*服务器数据*/
import ajaxData from "../data/index";

/*action creator*/
export function addProduct (id){
	return {
		type: ADD_PRODUCT,
		productId: id
	}
};

export function getProduct (){
	return {
		type: GET_PRODUCTS,
		data: ajaxData
	}
};

// export function ajaxProduct = (data) => {
// 	return (state, dispatch) => (
// 		setTimeout(function () {
// 			dispatch(getProduct())
// 		}, 1000)
// 	)
// };