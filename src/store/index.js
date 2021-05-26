import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      return state.user = user
    }
  },
  actions: {
    setUserInfo(context, userInfo) {
      context.commit('setUser', userInfo)
    }
  }
})

export default store;