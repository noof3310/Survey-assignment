<template>
    <div class="Result" v-show="ready">
        <div class="QBox" >
            <div class="QTitle">Overall</div>
            <div class="Stats">
                <Overall v-for="result in results" v-bind:key="result.id" 
                :title="result.question" 
                :choice="result.choices" 
                :count="result.count"  />
            </div>
            <div class="Review">
            <div>Review</div>
            <div class="Word">
                <div>1 &ensp; {{this.reviews[1]}}</div>
                <div>2 &ensp; {{this.reviews[2]}}</div>
                <div>3 &ensp; {{this.reviews[3]}}</div>
                <div>4 &ensp; {{this.reviews[4]}}</div>
                <div>5 &ensp; {{this.reviews[5]}}</div>
            </div>
            </div>
        </div>
        <b-button class="BSurvey" size="lg" variant="light" @click="changeState()">Start Survey</b-button>
    </div>
</template>

<script>
import Overall from './Overall.vue'
export default {
    name: 'OverallPage',
    data(){
        return{
            reviews: [0,0,0,0,0,0],
            results: [],
            ready: false
        }
    },
    
    
    methods: {
        changeState:function() {
            this.$emit('changeState',1)
        }
    },
    components: {
        Overall
    }
}
</script>

<style scoped>
    .Result{
        align-self: center;
    }
    .Stats{
        margin: 10px;
        height: 330px;
        overflow-y: scroll;
    }
    .Review{
        font-size: 15px;
        width: 60px;
        margin: 10px;
        height: 150px;
        align-self: left;
        align-self: start;
    }
    .BSurvey{
        margin: 20px 10px 10px 10px;
    }
    .Word{
        text-align: left;
        padding-left: 10pt;
    }
</style>