/**
 * Created by jiajunhe on 2016/12/8.
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const imgStyle = {
	margin: 10,
	height: 100
};

const Copy = () => (
	<p>
		Please click on a book to view details in a modal. 
		You can copy/paste the link of the modal. 
		The link will open book on a separate page.
	</p>
);

export const Index = React.createClass({
	render(){
		var allProducts = this.props.products;
		return (
			<div>
				<Copy/>
				<p>
					<Link to="/cart" className="btn btn-danger">Cart</Link>
				</p>
				<div>
					{Object.keys(allProducts).map(id => (
						<Link key={allProducts[id].id} to={`/products/${allProducts[id].id}`}>
							<img style={imgStyle} src={allProducts[id].src}/>
						</Link>
					))}
				</div>
			</div>
		)
	}
});

export default connect(
	(state, props) => {
		return {
			products : state.products
		}
	}
)(Index);