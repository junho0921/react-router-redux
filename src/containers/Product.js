/**
 * Created by jiajunhe on 2016/12/8.
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {addProduct} from '../action/index';

const Modal = React.createClass({
	styles: {
		position: 'fixed',
		top: '20%',
		right: '20%',
		bottom: '20%',
		left: '20%',
		width: 450,
		height: 400,
		padding: 20,
		boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
		overflow: 'auto',
		background: '#fff'
	},
	render() {
		return (
			<div style={this.styles}>
				<p><Link to={this.props.returnTo}>Back</Link></p>
				{this.props.children}
			</div>
		)
	}
});

export const Product = React.createClass({
	handlerBuy () {
		this.props.dispatch(addProduct(this.props.productOnShow.id));
	},
	render() {
		return (
			<div>
				<img src={this.props.productOnShow.src} style={{ height: '80%' }} />
				<p>{this.props.productOnShow.title}</p>
				<Link
					to={`/cart`}
					onClick={this.handlerBuy}
					className="btn btn-primary">
					Buy
				</Link>
			</div>
		)
	}
});

export default connect(
	(state, props) => {
		console.log('Product => ', props);
		var activeId = props.params.id;
		return {
			productOnShow : state.products[activeId]
		}
	}
)(Product);