// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// We Have import vue-resource (npm install vue-resource)
import vueResouce from 'vue-resource'


Vue.config.productionTip = false;
Vue.use(vueResouce);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
