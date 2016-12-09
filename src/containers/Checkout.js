import React from 'react';
import {connect} from 'react-redux';

export const Checkout = (props) => {
	let count = 0;
	return (
		<div>
			<h1>Invoice</h1>
			<table className="table table-bordered">
				<tbody>
				{props.CartItems.map((item, index)=>{
					count += item.number;
					return <tr key={item}>
						<td>{item.title}</td>
						<td>{item.number}</td>
					</tr>
				})}
				</tbody>
			</table>
			<p>Total: {count}</p>
		</div>
	)
};

export default connect(
	(state, props) => {
		const CartItemsID = Object.keys(state.products).filter(function(id){
			return state.products[id].number > 0 ;
		});
		const CartItems = CartItemsID.map(function(id){
			return state.products[id];
		})
		return {
			CartItems : CartItems
		}
	}
)(Checkout);
