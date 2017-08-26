<template>
  <div class="translateForm">

    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="Enter Text">
      <br>
      <input type="submit" value="Translate">
    </form>

  </div>
</template>

<script>
export default {

    name:'translateForm',

    data(){
        return{
            textToTranslate:''
        }
    },

  methods:{
        formSubmit(e){
            this.$emit('formSubmitted',this.textToTranslate)
            e.preventDefault();
        }
  }



}
</script>


<style scoped>


</style>
