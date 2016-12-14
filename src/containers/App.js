/**
 * Created by jiajunhe on 2016/12/7.
 */
import React from 'react';
import {ajaxProduct} from "../action/";
import {connect} from 'react-redux';
import { goBack, goForward } from 'react-router-redux';

const Heading = () => (
	<h1>Nile Book Store</h1>
);

export const App = React.createClass({
	componentDidMount () {
		// 模拟异步请求
		this.props.dispatch(ajaxProduct());

		// const _this = this;
		// setTimeout(function () {
		// 	_this.props.dispatch(getProduct());
		// }, 1000);
	},
	backHistory(){
		console.log('goBack', goBack, this.props);
		this.props.dispatch(goBack());
	},
	forwardHistory(){
		console.log('goForward', goForward, this.props);
		this.props.dispatch(goForward());
	},
	render () {
		console.log('app 的props', this.props);
		return (
			<div>
				<div>
					<button className="btn btn-danger" onClick={this.backHistory}>backHistory</button>
					<button className="btn btn-danger" onClick={this.forwardHistory}>forwardHistory</button>
				</div>
				<Heading />
				{this.props.children}
			</div>
		);
	}
});

export default connect()(App);