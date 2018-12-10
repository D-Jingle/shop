import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import '@/mock/mock.js'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import {NavBar , Button , Icon , Tabbar , TabbarItem} from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(NavBar).use(Button).use(Icon).use(Tabbar).use(TabbarItem);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
