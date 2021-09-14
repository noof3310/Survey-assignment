<template>
    <div id="Home" class = "Home">
        <div class="Head">S U R V E Y</div>
        <div class="Header">Would you help us make our next event better?</div>
        <b-button variant="light" @click="changeState">
            <div class="SButton">
                Start Survey
            </div>
        </b-button>
    </div>
    
</template>

<script>
export default {
    name: 'Home',
    methods: {
        changeState: function(){
            this.$emit('changeState',1)
        }
    }
};
</script>

<style scoped>
    .Home{
       color: white; 
       font-weight: bolder;
    }
    .Head{
        font-size: 65px;
        font-weight: bold;
        background: linear-gradient(268.07deg, #FFFFFF 25.02%, #C5EF81 78.02%);
        background-clip: text;
        background-size: 100%;
        background-repeat: repeat;
    
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        
    }
    .Header{
        font-size: 25px;
        margin-bottom: 20px;
    }
    .SButton{
        font-size: 25px;
        font-weight: bold;

        
    }
</style>
