import * as serviceWorker from './libs/serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css'
import './styles/home.css'
import './styles/activity.scss'
import './styles/act.scss'
import './styles/film.css'
import './styles/city.css';
import './styles/category.scss'
import App from './App';
// 路由
import { HashRouter as Router} from "react-router-dom";

// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import { Provider } from 'react-redux';

//请求


import axios from 'axios';
React.axios = axios;
//仓库
// state交换数据的仓库
// action交换数据的动作
const store = createStore((state={
	isShowBox:false,
},action)=>{
	switch (action.type) {
        case 'toggleBox':
            return {
                ...state,
                isShowBox:action.isShowBox
            }
        
        default:
            return state
    }
})


ReactDOM.render(
	<Provider store={store}>
		<Router>
		<App />
		</Router>
	</Provider>
	, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
