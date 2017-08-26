<template>
  <div id="app">
    <h1>Word Translator</h1>
    <br>
    <TranslateForm v-on:formSubmitted="textTranslate"></TranslateForm>
  </div>
</template>

<script>

  import TranslateForm from './components/TranslateForm'

export default {
  name: 'app',
  components: {
      TranslateForm
  },

  methods:{
      textTranslate:function (text) {

          this.$http.get('https://translate.yandex.net/api/v1.5/tr.jsonp/translate?key=trnsl.1.1.20170826T072718Z.e12fa85b5b177271.b767ff417ea0fbfb3e0a22a6aca8791558729d0e&lang=pa&callback=TEXT&text='+text)
            .then((res)=>{
              console.log(res)
            })

      }
  }

}
</script>

<style>
#app {

}
</style>
