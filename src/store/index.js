import Vue from 'vue'
import Vuex from 'vuex'

import { createStore } from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:null,
    userAVT:null,
    users: [],
    mapState:[],
    couter:1

  },
  getters: {
    getUsers: (state) => state.users,
    // getMapState: (state) => state.mapState
  },
  actions: {
    
    addAction(context){
      context.commit('add', this.state.couter+1)
    },

    slideAction(context){
      context.commit('slideSide', this.state.drawer = !this.state.drawer )
    },
  //   getPosts({ commit }) {
  //     axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then(response => {
  //         commit('SET_POSTS', response.data)
  //     })
  // }
  mapAction({commit}){
      Vue.axios.get('https://hal.hal-logistics.la/api/v1/listing/branches?')
          .then((resp)=>{
              commit('Set_MapState',resp.data)
          })
    },
  },
  mutations: {
    slideSide(state, side){
      state.drawer = side
    },
    SET_USERS(state, users) {
      state.users = users
  },
    Set_MapState(state, mapState) {
      state.mapState = mapState
  },
  add(state, value){
    state.couter = value
  }
  },
  modules: {
  }
})
