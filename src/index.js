import { createHashHistory, useBasename} from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const history = createHashHistory({});

import {App, Index, Product, Cart, Checkout} from "./component/index"

import {handlerBuy} from './utils/index' ;

ReactDOM.render((
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="/products/:id" component={Product} handlerBuy={handlerBuy} />
			<Route path="/cart" component={Cart}/>
		</Route>
		<Route path="/checkout" component={Checkout}/>
	</Router>
), document.getElementById('container'));
