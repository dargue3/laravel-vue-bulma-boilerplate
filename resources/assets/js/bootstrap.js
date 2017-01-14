import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

window.Vue = Vue;
window.axios = Axios;

Vue.use(VueRouter);


window.axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
