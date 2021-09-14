<template>
    <div class= "Input">
        <b-button class="QChoice" size="lg" :pressed="Toggle[0]" variant="outline-primary" @click="select(0)" >A) {{choices[0]}}</b-button>
        <b-button class="QChoice" size="lg" :pressed="Toggle[1]" variant="outline-primary" @click="select(1)">B) {{choices[1]}}</b-button>
        <b-button class="QChoice" size="lg" :pressed="Toggle[2]" variant="outline-primary" @click="select(2)">C) {{choices[2]}}</b-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Toggle: [false,false,false],
            selected: 0
        }
    },
    methods:{
        select: function(n){
            this.Toggle = [false,false,false]
            this.Toggle[n] = true
            this.selected = n+1
            this.$emit('select',this.selected)
        }
    },
    props: {
        choices: {
            type: Array,
            default: () => ['','','']
        }
    },
    watch: {
        choices: function() {
            this.Toggle = [false,false,false]
        }
    }
}
</script>

<style scoped>
    .QChoice{
        margin: 0px 10px 15px 10px;
        text-align: left;
    }
</style>