<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {
    let lang = localStorage.getItem("lang");
    console.log("lang000", lang);
    if(lang){
      if (lang == "en" ? "zh" : "en") {
      localStorage.setItem("lang", lang);
      console.log("lang1111", lang);
    }
    }else{
      localStorage.setItem('lang','en')
      console.log("lang2222", lang);
    }
    
    

  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  // overflow: auto;
}
</style>
