/*基本库*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
/*reducers*/
import {products} from "./reducer/index";
/*组件*/
import App from "./containers/App";
import Index from "./containers/Index";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";

// 创建root reducer, 并让react-router-redux加入到处理state的逻辑
// 让history的更新可以修改到state里history的数据. ??
const reducer = combineReducers({
	products,
	routing: routerReducer
});

// 需要routerMiddleware中间件才能给store.disptach方法传递react-router-redux的action
const middleware = routerMiddleware(hashHistory)
// 创建store系统
const store = createStore(
  reducer,
  applyMiddleware(middleware)
)

// history系统是从Store系统里抽离出来. 让histoty的更新可以调用store.dispatch来更新. ??
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="/products/:id" component={Product} />
				<Route path="/cart" component={Cart}/>
				<Route path="/checkout" component={Checkout}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('container')
);