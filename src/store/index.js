import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    showModal: false,
    intervalId: 0,

    top: 0,
    left: 0,
    x: window.innerWidth - 80,
    y: window.innerHeight - 125,
  },

  mutations: {
    increment(state) {
      state.score++
    },

    toggleModal(state) {
      state.showModal = !state.showModal
    },

    startGame(state) {
      state.intervalId = setInterval(() => {
        state.top = Math.floor(Math.random() * state.y) + 48
        state.left = Math.floor(Math.random() * state.x)
      }, 1000)

      state.score = 0
    }
  },

  actions: {
  },

  modules: {
  }
})
