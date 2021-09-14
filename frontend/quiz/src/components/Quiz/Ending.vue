<template>
    <div class= "Box">
        <div class= "QTitle">S U R V E Y</div>
        <div class= "ThankU">
            <b-icon-emoji-smile class="Emo" font-scale="10pt" />
            <div>Thank you so much na :3</div>
        </div>
        <b-button class="closeButton" variant="primary" @click="submit()">Close</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        submit:function() {
            this.$emit('submit')
        }
    }
}
</script>

<style scoped>
    .closeButton{
        font-size: 25px;
        font-family: 'Roboto Condensed';
        width: 150px;
        font: bold;
    }
    .ThankU{
        margin: 20px 10px 10px 10px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .Emo{
        margin: 10px;
        color: rgb(96, 228, 70);
        align-self: center;
    }
</style>