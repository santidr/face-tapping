import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    chances: 3,
    showModal: false,
    intervalId: 0,
    speed: 1500,
    changeSpeed: 0,

    top: 0,
    left: 0,
    x: window.innerWidth - 80,
    y: window.innerHeight - 145,
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
      state.speed = 1500
    },

    startGame(state) {
      state.changeSpeed = state.speed
      state.intervalId = setInterval(moveFace, state.speed)

      function moveFace() {
        state.top = Math.floor(Math.random() * state.y) + 48
        state.left = Math.floor(Math.random() * state.x)

        if (state.chances > 0) {
          state.chances--
          state.changeSpeed -= 20
        } else {
          clearInterval(state.intervalId)
          state.speed = 1500
          state.changeSpeed = state.speed
          state.showModal = !state.showModal
        }

        if (state.changeSpeed !== state.speed) {
          clearInterval(state.intervalId)
          state.speed = state.changeSpeed
          state.intervalId = setInterval(moveFace, state.speed)
        }
      }
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
