// =========================================================
// * Vue Admin Dashboard - v1.0.0
// =========================================================
//
// * Product Page: https://github.com/kothing/vue-admin-dashboard
// * Copyright 2099 Kothing
//
// =========================================================

import Vue from 'vue'
import axios from 'axios'
import NProgress from 'nprogress'

// Sync router with store
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'

Vue.prototype.$http = axios
// Sets the default url used by all of this axios instance's requests
axios.defaults.baseURL = 'http://127.0.0.1:8001/admin/'
axios.defaults.headers.get.Accept = 'application/json'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token
}

axios.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    NProgress.start()
    return request
  },
  function (error) {
    // Do something with request error
    NProgress.done()
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  function (error) {
    // Do something with response error
    NProgress.done()
    return Promise.reject(error)
  },
)

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
