<template>
    <div id="score-container">
        <span>Score: {{ score }}</span>
        <span>Chances: {{ chances }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Score',

    computed: {
        ...mapState(['score', 'chances'])
    }
}
</script>

<style scoped>
    #score-container {
        position: fixed;
        display: flex;
        justify-content: space-between;
        color: white;
        font-size: 23px;
        font-weight: 500;
        width: 90%;
        padding: 10px 20px;
    }
</style>