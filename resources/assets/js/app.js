import './bootstrap';

import App from './components/App';
import Router from './routes.js';

new Vue({
    el: '#app',
    components: { App },
    router: Router,
});
