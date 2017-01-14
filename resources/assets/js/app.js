/**
 * The entry point for the SPA
 */

// first bootstrap Vue and its AJAX library
import './bootstrap';

import Router from './routes.js';
import App from './components/App';

// create the Vue instance
new Vue({
  el: '#app',
  router: Router,
  components: { App }
});
