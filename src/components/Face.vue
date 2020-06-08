<template>
    <div id="face"
        :style="{top: top+'px', left: left+'px'}"
        @click="shotObject"
        >
        <img src="@/assets/obj-img.png" alt="">
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

var scream = new Audio(require('@/assets/audio/ay.mp3'))
scream.volume = 0.4

export default {    
    name: 'Face',

    data() {
        return {
            color: 'white'
        }
    },

    computed: {
        ...mapState(['top', 'left', 'intervalId'])
    },

    methods: {
        ...mapMutations(['incrementScore', 'restoreChances', 'startGame']),

        shotObject() {
            scream.play()
            this.incrementScore()
            this.restoreChances()
        }
    }
}
</script>

<style scoped>
    #face {
        position: absolute;
        height: 105px;
        width: 80px;
    }

    #face img {
        width: 100%;
    }
</style>