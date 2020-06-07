import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    chances: 3,
    showModal: false,
    intervalId: 0,

    top: 0,
    left: 0,
    x: window.innerWidth - 80,
    y: window.innerHeight - 125,
  },

  mutations: {
    incrementScore(state) {
      state.score++
    },

    restoreChances(state) {
      state.chances = 3
    },

    toggleModal(state) {
      state.showModal = !state.showModal
    },

    GAME_OVER(state) {
      clearInterval(state.intervalId)
    },

    startGame(state) {
      state.intervalId = setInterval(() => {
        state.top = Math.floor(Math.random() * state.y) + 48
        state.left = Math.floor(Math.random() * state.x)

        if (state.chances > 0) state.chances--
        else {
          clearInterval(state.intervalId)
          state.showModal = !state.showModal
        }

      }, 1000)

      state.score = 0
    }
  },

  actions: {
    gameOver(state) {
      state.commit('GAME_OVER')
      state.commit('toggleModal')
    }
  },

  modules: {
  }
})
