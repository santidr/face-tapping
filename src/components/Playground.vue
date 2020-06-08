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
        background: -webkit-linear-gradient(to top, #536976, #292E49);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #536976, #292E49); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 100vh;
        width: 100vw;
    }
</style>