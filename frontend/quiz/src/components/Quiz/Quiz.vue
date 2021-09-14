<template>
    <div id="Box" class="Box">
        <div class="QHead">
            <div class = "QBack"  >
                <button class="QBackward" v-show="Back" @click="prevQ()"> &lt; </button>
            </div>
            <div class = "QTitle">S U R V E Y </div>
            <div class = "QBack"></div>
        </div>

        <div> {{Problem}} / {{Count}}</div>

        <div class="Question">{{Question}}</div>


        <Box v-if ="Type == 0" v-on:setName="setName($event)" />
        <Choice v-else-if ="Type == 1" :choices="choices" v-on:select="setChoice($event)" />

        <Review v-else-if ="Type == 2" v-on:rate="Rate($event)" v-on:comment="Comment($event)" />

        <b-button v-if ="(Type == 1 && choice == 0)" disabled class="QButton" variant="primary"> {{ButtonText}} </b-button>

        <b-button v-else class ="QButton" variant = "primary" @click="nextQ()"> {{ButtonText}} </b-button>
    </div>
</template>

<script>
import Box from './Box.vue'
import Choice from './Choice.vue'
import Review from './Review.vue'

export default {
    name: 'Quiz',
    data() {
        return {
            choice: 0
        }
    },
    props:{
        Problem: Number,
        Count: Number,
        Question: String,
        ButtonText: {
            type: String,
            default: 'Next'
        },
    

        Type: {
          type: Number,
          default: 0
        },
        choices: {
            type: Array,
            default: () => ['','','']
        },
        
        Back: {
            class: Boolean,
            default: true
        }
    },
    components: {
        Box,
        Choice,
        Review
    },
    methods:{
        next:function() {
            this.$emit('next')
            if(this.choice!=0) {
                this.$emit('choice',this.choice)
                this.choice=0
            }
        },
        setName:function(name) {
            this.$emit('setName',name)
        },
        setChoice:function(choice) {
            this.choice = choice
        },
        Rate:function(rate) {
            this.$emit('rate',rate)
        },
        Comment:function(text) {
          this.$emit('comment',text)
        },
        previous:function() {
            this.$emit('previous')
        }
    }
}
</script>

<style scoped>
    .Question {
        margin: 20px 10px 10px 10px;
        text-align: center;
        height: 80px;
        font-size: 22px;
    }
    .Input{
        margin: 10px 10px 10px 10px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .QButton{
        font-size: 20px;
        font-family: 'Roboto Condensed';
        width: 150px;
    }
    .QHead{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .QBack{
        color: gray;
        width: 60px;
        font-size: 40px;
        align-self: center;
        background: white;
        border: white;
    }
    .QBackward{
        align-self: center;
        background: white;
        border: white;
    }
</style>

<style>
    .Box {
        width: 445px;
        min-height: 550px;
        background-color: white;
        align-self: center;
        font: bold;
        font-size: 25px;
    }
    .QTitle {
        font: bolder;
        margin: 20px
    }
</style>