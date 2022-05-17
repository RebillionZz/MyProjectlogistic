import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/register.vue'
import DashbordView from '../views/Admin/DashbordView.vue'
import homeuser from '../views/User/homepage.vue'
import branch from '../views/User/branch.vue'
import login from '../views/User/login.vue'
import servicearea from '../views/User/service.vue'
import pricecal from '../views/User/pricecal.vue'
import register from '../views/User/register.vue'
import follow from '../views/User/follow.vue'
import codregister from '../views/User/codregister.vue'
import infohal from '../views/User/info.vue'
import Sidebar from '@/components/Sidebar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/infohal',
    component: infohal,
    name: infohal,
    children:[
      {
        path:'/infohal1',
        component:() => import('../views/Admin/ReasonChild/r1C.vue')
      },
      {
        path:'/infohal2',
        component:() => import('../views/Admin/ReasonChild/r2C.vue')
      },
      {
        path:'/infohal3',
        component:() => import('../views/Admin/ReasonChild/r3C.vue')
      },
      {
        path:'/infohal4',
        component:() => import('../views/Admin/ReasonChild/r4C.vue')
      },
      {
        path:'/infohal5',
        component: () => import('../views/Admin/ReasonChild/r5C.vue')
      },
      {
        path:'/infohal6',
        component:() => import('../views/Admin/ReasonChild/r6C.vue')
      },
    ]
  },
  {
    path: '/codregister',
    name: 'codregister',
    component: codregister
  },
  {
    path: '/follow',
    name: 'follow',
    component: follow
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/pricecal',
    name: 'pricecal',
    component: pricecal
  },
  {
    path: '/servicearea',
    name: 'servicearea',
    component: servicearea
  },
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
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: register
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
    path: '/Sidebar',
    component: Sidebar,
    name:'Sidebar',
    children:[
      {
        path:'/Sidebar',
        name:'homedc',
        component:() => import('../views/Admin/list-DC/homeDC.vue')
      },
      {
        name:'sidebarcE',
        path:'/detail/:id',
        
        component:() => import('../views/Admin/list-DC/HomeDetail/homeDetail.vue')
      },
      {
        path:'/senddc',
        component:() => import('../views/Admin/list-DC/sendDC.vue')
      },
      {
        path:'/pricedc',
        component:() => import('../views/Admin/list-DC/priceDC.vue')
      },
      {
        path:'/coddc',
        component:() => import('../views/Admin/list-DC/CODDC.vue')
      },
      {
        path:'/datadc',
        component:() => import('../views/Admin/list-DC/DataDC.vue'),
        children:[
          {
            path:'/dataCC/:id',
            name:"dataCC",
            component:() => import('../views/Admin/list-DC/ForDataDC/dataCC.vue')
          },
        ]
      },
      
      {
        path:'/myitempushc',
        component:() => import('../views/Admin/list-DC/myItempushC.vue'),
        children:[
          {
            path:'/push1c',
            name:'push1c',
          component:() => import('../views/Admin/list-DC/dataC/push1C.vue'),
          },
          {
            path:'/push2c',
            name:'push2c',
          component:() => import('../views/Admin/list-DC/dataC/push2C.vue'),
          },
          {
            path:'/push3c',
            name:'push3c',
          component:() => import('../views/Admin/list-DC/dataC/push3C.vue'),
          },
        ]
      },
      {
        path:'/myitemgetc',
        component:() => import('../views/Admin/list-DC/myItemGetC.vue')
        
      },
      // footer
      {
        path:'/footerc',
        component:()=> import('../components/footerC.vue')
      },
      // User
      ,
      {
        path:'/userinfoc',
        component:() => import('../views/Admin/list-DC/UserPage/UserInfoC.vue')
        
      }
      ,
      {
        path:'/userbunzyc',
        component:() => import('../views/Admin/list-DC/UserPage/UserBunzyC.vue')
        
      }
      ,
      {
        path:'/contactc',
        component:() => import('../views/Admin/list-DC/UserPage/contactC.vue')
        
      }
      // Reason
      ,
      {
        path:'/reasonc',
        component:() => import('../views/Admin/ReasonC.vue')
        
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
