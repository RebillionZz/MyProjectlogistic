import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashbordView from '../views/Admin/DashbordView.vue'
import sidebarC from '@/components/sidebarC.vue'
import Homepage from '../views/userview/homepage.vue'
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
      },
      {
        path:'/priceDC',
        component:() => import('../views/Admin/list-DC/priceDC.vue')
      },
      {
        path:'/CODDC',
        component:() => import('../views/Admin/list-DC/CODDC.vue')
      },
      {
        path:'/DataDC',
        component:() => import('../views/Admin/list-DC/DataDC.vue')
      },
      {
        path:'/myItempushC',
        component:() => import('../views/Admin/list-DC/myItempushC.vue'),
        children:[
          {
            path:'/myItempushC',
          component:() => import('../views/Admin/list-DC/dataC/push1C.vue'),
          },
          {
            path:'/push2C',
          component:() => import('../views/Admin/list-DC/dataC/push2C.vue'),
          },
          {
            path:'/push3C',
          component:() => import('../views/Admin/list-DC/dataC/push3C.vue'),
          },
        ]
      },
      {
        path:'/myItemGetC',
        component:() => import('../views/Admin/list-DC/myItemGetC.vue')
        
      }
    ]
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: homepage
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
