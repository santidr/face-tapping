<template>
  <div id="app">
    <Playground />
    <Modal />
  </div>
</template>

<script>
import Playground from '@/components/Playground'
import Modal from '@/components/Modal'

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Playground,
    Modal
  },

  methods: {
    ...mapMutations(['toggleModal', 'setMaxScore'])
  },

  created() {
    this.toggleModal()

    let maxScoreStored = localStorage.getItem('ls-maxScore')
    if (maxScoreStored !== null) this.setMaxScore(maxScoreStored)
  }

}
</script>

<style>
  body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
  }
</style>
