import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
// import { createStore } from 'vuex'
// import './'
import axios from 'axios'
// import userdata from '@/store/user/userdata'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:null,
    user:null,
    userAVT:null,
    users: JSON.parse(localStorage.getItem("token")),
    mapState:[],
    // characters:[],
    // charactersFilters:[],
    map2:[]
  },
  getters: {
    getUser(state){
        return state.users;
    },

    // getHistory(state){
    //   return state.userHistory;
    // },
    // getUsers: (state) => state.users,
    getMapState: (state) => state.mapState,
    itemHome: state => {
      return state.itemHome;
    },
    homeItem: state => id =>{
      return state.itemHome.find(homeItem =>homeItem.id === id);
    },
  },
  mutations: {
    slideSide(state, side){
      state.drawer = side
    },
  //   SET_USERS(state) {
  //     var user = JSON.parse(localStorage.getItem("user-info"));
  //     state.users = user
  // },
    Set_MapState(state, mapState) {
      state.mapState = mapState
  },
  
  // set_map2(state, payload){
  //   state.map2 = payload
  // }
  
  },
  actions: {
    // async map2Action({commit}){
    //   try{
    //     const response = await fetch('https://hal.hal-logistics.la/api/v1/listing/branches?')
    //     const data = await response.json()
    //     console.log(data)
    //   }catch(err){
    //     console.error(err)
    //   }
    // }
    // ,
    slideAction(context){
      context.commit('slideSide', this.state.drawer = !this.state.drawer )
    },

    // async mapAction({commit}){
    //     axios.get('https://hal.hal-logistics.la/api/v1/listing/branches?')
    //         .then((resp)=>{
    //             commit('Set_MapState',resp.data)
    //         }).catch(
    //           err => {
    //             console.log(err)
    //           }
    //         )
            
    //   },

    mapAction({commit}){
       axios.get('http://localhost:3000/maps')
        .then((resp)=>
            commit('Set_MapState',resp.data)
            // console.log(this.mapsData = resp.data)
        )
        .catch(err => console.error('eror map data khub'))
    },
  

    // async mapAction(){
    //     axios.get(`maps`)
    //         .then((resp)=>{
    //            this.state.mapState =resp.data
    //         }).catch(
    //           err => {
    //             console.log(err)
    //           }
    //         )
            
    //   },
      
    clearStore(){
      
        console.log('logout');  
          localStorage.clear();
          window.location.href = "/"
          router.push('/').catch(()=>{
            
          });
    },
    
  },
  modules: {

  }
})
