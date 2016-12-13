import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
// import store from './vuex/store';
import App from './App.vue';
// import filters from './filter';

window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: false
});
window.router = router;

// Object.keys(filters).forEach((k) => {
//     Vue.filter(k, filters[k]);
// });

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
// Vue.use(require('./ext/vue_ext.js'));
router.afterEach(function(transition) {
    window.scrollTo(0, 0);
});
router.map({
    // '/': {
    //     name: 'index/home',
    //     component(resolve) {
    //         require(['./views/home.vue'], resolve);
    //     }
    // }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
// sync(store, router);
router.start(App, '#app');

