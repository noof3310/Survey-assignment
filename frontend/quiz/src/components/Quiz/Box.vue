<template>
  <div class= "Input">
    <div class="FormSize">
    <b-form-input class="FormText" v-model="text" :placeholder="placeHolder" @change="setName()"></b-form-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Box',
    props:{
        placeHolder: {
            type: String,
            default: 'Type your name'
        },
        
    },
    data() {
      return {
        text: ''
      }
    },methods:{
      setName:function(){
        this.$emit('setName',this.text)
      }
    }
  }
</script>

<style scoped>
  .FormText {
    font-size: 20px;
    font-family: 'Roboto Condensed';
  }
  .FormSize {
    height: 200px;
  }
</style>