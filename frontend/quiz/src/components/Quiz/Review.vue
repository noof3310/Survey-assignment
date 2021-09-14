<template>
  <div class= "QInput">
    <b-form-rating v-model="value" variant="primary" size="lg" class= "Rate" @change="Rate()"></b-form-rating>

    <b-form-textarea class= "Comment"
      id="textarea"
      v-model="text"
      placeholder="Write your comment"
      rows="5"
      no-resize
    >
    
    </b-form-textarea>

  </div>
</template>

<script>
  export default {
    name: 'Review',
    data() {
      return {
        text: '',
        value: 0
      }
    },
    methods: {
        Rate:function() {
          this.$emit('rate',this.value)
        },
        Comment:function() {
          this.$emit('comment',this.text)
        }
    }
  }
</script>

<style scoped>
    .Rate{
        width: 50%;
        align-self: center;
        margin-bottom: 20px;
    }
    .Comment{
        margin-bottom: 40px;
    }
</style>