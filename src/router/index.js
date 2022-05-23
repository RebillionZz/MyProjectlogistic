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
import follow from '../views/User/follow.vue'
import codregister from '../views/User/codregister.vue'
import Sidebar from '@/components/Sidebar.vue'
import registerhal from '../views/User/register.vue'
import infohal1 from '../views/User/info1.vue'
import infohal2 from '../views/User/info2.vue'
import infohal3 from '../views/User/info3.vue'
import infohal4 from '../views/User/info4.vue'
import infohal5 from '../views/User/info5.vue'
import infohal6 from '../views/User/info6.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/infohal1',
    name: 'infohal1',
    component: infohal1
  },
  {
    path: '/infohal2',
    name: 'infohal2',
    component: infohal2
  },
  {
    path: '/infohal3',
    name: 'infohal3',
    component: infohal3
  },
  {
    path: '/infohal4',
    name: 'infohal4',
    component: infohal4
  },
  {
    path: '/infohal5',
    name: 'infohal5',
    component: infohal5
  },
  {
    path: '/infohal6',
    name: 'infohal6',
    component: infohal6
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
    path: '/registerhal',
    name: 'registerhal',
    component: registerhal
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
