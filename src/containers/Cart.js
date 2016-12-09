/**
 * Created by jiajunhe on 2016/12/8.
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

export const Cart = React.createClass({
	componentDidMount () {
		// 模拟异步请求
		const _this = this;
		if(this.props.CartItems.length == 0){
			setTimeout(function () {
				console.log('回到首页');
				_this.props.dispatch(push('/'));
			}, 2000);
		}
	},
	render () {
		return (
			<div>
				{(this.props.CartItems.length == 0) ? <p>Your cart is empty</p> : '' }
				<ul>
					{
						this.props.CartItems.map((item, index)=>{
							return <li key={item.id}>{item.title} - {item.number}</li>
						})
					}
				</ul>
				<Link to="/checkout" className="btn btn-primary">Checkout</Link>
				<Link to="/" className="btn btn-info">Home</Link>
			</div>
		);
	}
});


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
)(Cart);