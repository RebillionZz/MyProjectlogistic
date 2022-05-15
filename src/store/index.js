import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
import { createStore } from 'vuex'
// import axios from 'axios'
// import userdata from '@/store/user/userdata'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:null,
    userAVT:null,
    // userHistory:[],

    users: JSON.parse(localStorage.getItem("user-info")),
    // A1: JSON.parse(localStorage.getItem("user-info").history),
    // couter:1,
    itemHome:[
      {id:1,bin:'VTE12345678901',group:'ເຄື່ອງນຸ່ງຫົ່ມ',date:'13/09/2021',send:'ຈັດສົ່ງສຳເລັດ',sender:'Name1' , getter:'Getname1'},
      {id:2,bin:'VTE22222222222',group:'ເຄື່ອງໂທລະສັບ',date:'14/09/2021',send:'ຈັດສົ່ງສຳເລັດ',sender:'Name2' , getter:'Getname2'},
      {id:3,bin:'VTE33333333333',group:'ເຄື່ອງໂມງ',date:'15/09/2021',send:'ຈັດສົ່ງສຳເລັດ',sender:'Name3' , getter:'Getname3'},
      {id:4,bin:'VTE44444444444',group:'ເຄື່ອງບໍ່ແມ່ນເຄື່ອງ',date:'16/09/2021',send:'ຈັດສົ່ງສຳເລັດ',sender:'Name4' , getter:'Getname4'}
    ],
    mapState:[],
    

  },
  getters: {
    getUser(state){
        return state.users;
    },

    // getHistory(state){
    //   return state.userHistory;
    // },
    // getUsers: (state) => state.users,
    // getMapState: (state) => state.mapState,
    itemHome: state => {
      return state.itemHome;
    },
    homeItem: state => id =>{
      return state.itemHome.find(homeItem =>homeItem.id === id);
    },




    // HISTORY HOMEPAGE

    // itemHistory: state => {
    //   return state.users.history;
    // },
    // homeHistory: state => id =>{
    //   return state.itemHistory.find(homeItem =>homeItem.id === id);
    // }
    
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
  // userIteminHomepage
    // Set_userHistory(state,history){
    //   state.userHistory = history
    // }
  
  
  },
  actions: {
    slideAction(context){
      context.commit('slideSide', this.state.drawer = !this.state.drawer )
    },

    mapAction({commit}){
        Vue.axios.get('https://hal.hal-logistics.la/api/v1/listing/branches?')
            .then((resp)=>{
                commit('Set_MapState',resp.data)

            }).catch(
              err => {
                console.log(err)
              }
            )
            
      },
      // userHistory_Action({commit}){
      //   Vue.axios.get('http://localhost:3000/user')
      //     .then((resp)=>{
      //       commit('Set_userHistory',resp.data)
      //     }).catch(err=>{
      //       console.log(err)
      //     })
      // },
    clearStore(){
      
        console.log('logout'); 
          localStorage.clear();
          router.push('/').catch(()=>{});
    },
    
  },
  modules: {

  }
})
