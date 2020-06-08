<template>
    <div>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal"></div>
        </transition>

        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h2 v-if="score > 0">Score: {{ score }}</h2>
                <h4 v-else>Tap on the little face to get the highest score!</h4>
                
                <button class="button"
                @click="replay"
                >
                    <span v-if="score > 0">Replay</span>
                    <span v-else>Play</span>
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Modal',

    computed: {
        ...mapState(['score', 'showModal'])
    },

    methods: {
        ...mapMutations(['toggleModal', 'startGame', 'restoreChances']),

        replay() {
            this.toggleModal()
            this.restoreChances()
            this.startGame()
        }
    }
}
</script>

<style scoped>
    .button {
        outline: none;
        border: none;
        cursor: pointer;
        
        display: block;
        width: 100%;
        padding: 15px 25px;
        background-image: linear-gradient(to right, #00695C, #00897B);
        border-radius: 8px;
        
        color: #FFF;
        font-size: 18px;
        
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        font-weight: 400;
        
        width: 60%;
        max-width: 400px;
        background-color: #FFF;
        border-radius: 16px;
        
        padding: 25px;
    }
 
    .modal h2 {
        color: #222;
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    .modal h4 {
        text-align: center;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }  
</style>