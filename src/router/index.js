import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashbordView from '../views/Admin/DashbordView.vue'
import sidebarC from '@/components/sidebarC.vue'
import homeuser from '../views/userview/HomePageHal.vue'
import branch from '../views/userview/BranchView.vue'
import login from '../views/userview/loginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/branchservice',
    name: 'branch',
    component: branch
  },
  {
    path: '/homepage',
    name: 'homeuser',
    component: homeuser
  },
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
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
