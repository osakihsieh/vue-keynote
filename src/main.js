import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from './store'
import { mapGetters, mapActions } from 'vuex'

import box from 'components/Box'
Vue.component('box', box)
import vTitle from 'components/Title'
Vue.component('vTitle', vTitle)
import vWrap from 'components/Wrap'
Vue.component('vWrap', vWrap)

/* eslint-disable no-new */
export const MainApp = new Vue({
  el: '#app',
  router,
  store,
  ...App
})
