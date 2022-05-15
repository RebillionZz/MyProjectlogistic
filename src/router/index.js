import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/register.vue'
import DashbordView from '../views/Admin/DashbordView.vue'
import Sidebar from '@/components/Sidebar.vue'
Vue.use(VueRouter)

const routes = [
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
