import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:null,
    userAVT:null,
  },
  getters: {
  },
  mutations: {
    slideSide(state, side){
      state.drawer = side
    }
  },
  actions: {
    slideAction(context){
      context.commit('slideSide', this.state.drawer = !this.state.drawer )
    }
  },
  modules: {
  }
})
