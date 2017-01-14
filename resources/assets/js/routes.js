/**
 * The SPA's routes file
 */

import Router from 'vue-router'
import Home from './components/Home'

let routes = [
	{
		path: '/',
		component: Home,
	},
];

export default new Router({
	routes: routes,
});