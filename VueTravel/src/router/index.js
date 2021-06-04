import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Dtail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      //设置动态路由
      path: '/detail/:id',
      name: 'Dtail',
      component: Dtail
    }
  ],
    //每次做路由切换时进入新页面时,始终回到最顶部(xy轴都为0)
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
