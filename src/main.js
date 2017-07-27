// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import cadastros from './components/cadastros.vue';
import formulario from './components/formulario.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/cadastros', component: cadastros },
  { path: '/', compontents: formulario }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //template: '<App/>',
  //components: { App }
}).$mount('#app');