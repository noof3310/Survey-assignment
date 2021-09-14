<template>
<div v-show="this.ready" class="QuizState">
    <Quiz v-if ="problem === 1" 
    :Problem ="problem" 
    :Count ="count" 
    :Type ="0" 
    :Question ="'Would you help us make our next event better?'" 
    :Back ="false"
    v-on:next ="nextPb()"
    v-on:prev ="prevPb()"
    v-on:setName ="setName($event)"/>

    <Quiz v-else-if ="problem < this.count" 
    :Problem ="problem" 
    :Count ="count" 
    :Type ="1" 
    :Question ="Questions[problem - 2].question"
    :choices ="Questions[problem - 2].choices" 
    v-on:next ="nextPb()"
    v-on:prev ="prevPb()"
    v-on:choice="addChoice($event)"/>

    <Quiz v-else-if ="problem === this.count" 
    :Problem ="problem" 
    :Count ="count"  
    :Type ="2" 
    :Question ="'Review & Comment'" 
    :ButtonText ="'Submit'" 
    v-on:next ="nextPb()"
    v-on:prev ="prevPb()"
    v-on:rate ="setRate($event)"
    v-on:comment ="setComment($event)"/>

    <Ending v-else v-on:submit ="submit()" />
    
</div>
</template>

<script>
import Quiz from './Quiz/Quiz.vue'
import Ending  from './Quiz/Ending.vue'


export default {
    name:'QuizState',
    data() {
        return {
            problem: 1,
            count: 2,
            Questions: [{
                question:'',
                choices:[
                    '',
                    '',
                    ''
                ]
            }],
            name: '',
            answer: [],
            rate: 0,
            comment: '',
            ready: false
        }
    },
    props:{
    },
    components: {
        Quiz,
        Ending
    },
    methods: {
        nextPb:function() {
            this.problem += 1
        },
        prevPb:function() {
            this.answer.pop()
            this.problem -= 1
        },
        setName:function(name) {
            this.name = name
            
        },
        addChoice:function(choice) {
            this.answer.push({
                "qid": this.problem-2,
                "answer": [choice]
            })
        },
        setRate:function(rate) {
            this.rate = rate
        }
    }
  
}
</script>

<style scoped>
    .QuizState{
        align-self: center;
    }
</style>