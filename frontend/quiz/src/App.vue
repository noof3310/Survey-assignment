<template >
  
    <div id = "app">
       <Home v-if="state==0" v-on:changeState="changeState($event)" />

      <QuizState v-else-if="state==1" v-on:changeState="changeState($event)" />
       <Overall v-else v-on:changeState="changeState($event)"/>
    </div>  
</template>

<script>
import Home from './components/Home.vue'
import Overall from './components/OverallPage.vue'
import QuizState from './components/Quizstate.vue';



export default {
  name: 'App',
  components: {
   Home,
   Overall,
   QuizState

  },
  data() {
      return {
        state: 0,
      }
    },
  methods: {
    changeState:function(state){
      this.state=state
    },
    next:function(){
      this.problem =this.problem + 1
    }
  }
  
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {
  
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;



}


</style>
