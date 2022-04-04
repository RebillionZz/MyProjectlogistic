import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashbordView from '../views/Admin/DashbordView.vue'
import sidebarC from '@/components/sidebarC.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/DashbordView',
    component: DashbordView,
    // children:[
    //   {
    //     path:'',
    //     component:() => import('../views/Admin/list-DC/homeDC.vue')
    //   },
    //   {
    //     path:'/sendDC',
    //     component:() => import('../views/Admin/list-DC/sendDC.vue')
    //   }
    // ]
  },
  {
    path: '/sidebarC',
    component: sidebarC,
    children:[
      {
        path:'/sidebarC',
        component:() => import('../views/Admin/list-DC/homeDC.vue')
      },
      {
        path:'/sendDC',
        component:() => import('../views/Admin/list-DC/sendDC.vue')
      }
    ]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
