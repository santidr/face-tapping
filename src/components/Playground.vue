<template>
    <div id="playground" @click.self="gameOver">
        <Face />
        <Score />
    </div>
</template>

<script>
import Face from '@/components/Face'
import Score from '@/components/Score'

import { mapState, mapActions } from 'vuex'

export default {
    name: 'Playground',
    components: {
        Face,
        Score
    },

    computed: {
        ...mapState(['intervalId'])
    },

    methods: {
        ...mapActions(['gameOver'])
    }
}
</script>

<style scoped>
    #playground {
        top: 0;
        left: 0;
        position: relative;
        background: #455A64;
        height: 100vh;
        width: 100vw;
    }
</style>