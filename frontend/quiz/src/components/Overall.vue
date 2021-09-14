<template>
  <div>
      <div class = "title">{{title}}</div>
      <div class = "choiceList">
          <div class = "choice">
            <div class="choiceText">A. {{choice[0]}}</div>
            <div>{{count[0]}}</div>
          </div>
          <div class = "choice">
            <div class="choiceText">B. {{choice[1]}}</div>
            <div>{{count[1]}}</div>
          </div>
          <div class = "choice">
            <div class="choiceText">C. {{choice[2]}}</div>
            <div>{{count[2]}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Result',
    props:{
        title: String,
        choice: Array,
        count: Array
    }
}
</script>

<style scoped>
    .title{
        margin-left: 20px;
        font-size: 20px;
        width: 380px;
        text-align: left;
    }
    .choiceList{
        margin: 20px;
    }
    .choice{
        font-size: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:200px;
    }
    .choiceText{
        max-width: 160px;
        overflow: inherit;
    }
</style>