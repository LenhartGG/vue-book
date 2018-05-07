import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home';
import Collect from '../components/Collect';
import Detail from '../components/Detail';
import Add from '../components/Add';
import List from '../components/List';

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home,
      meta: { keepAlive: true }
    },
    { path: '/list', component: List },
    // /detail/1  {bid:1}
    { path: '/detail/:bid', component: Detail, name: 'detail' },
    { path: '/collect', component: Collect },
    { path: '/add', component: Add },
    { path: '*', redirect: '/home' }
  ]
})
