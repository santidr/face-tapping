<template>
    <div id="score-container">
        <span>Score: {{ score }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Score',

    computed: {
        ...mapState(['score'])
    }
}
</script>

<style scoped>
    #score-container {
        position: fixed;
        color: white;
        font-size: 25px;
        font-weight: 500;
        width: 100%;
        padding: 10px 20px;
    }
</style>