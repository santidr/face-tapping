<template>
    <div id="object"
        :style="{top: top+'px', left: left+'px'}"
        @click="shotObject"
        >
        <img src="@/assets/obj-img.png" alt="">
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {    
    name: 'Object',

    data() {
        return {
            color: 'white'
        }
    },

    computed: {
        ...mapState(['top', 'left', 'intervalId'])
    },

    methods: {
        ...mapMutations(['increment', 'startGame']),

        shotObject() {
            this.increment()
        }
    }
}
</script>

<style scoped>
    #object {
        position: absolute;
        height: 105px;
        width: 80px;
    }

    #object img {
        width: 100%;
    }
</style>