<template>
  <div class="app-navigation" :style="styles">
    <div class="logo">
      <img src="@/assets/images/home/logo.png" alt />
    </div>
    <div class="nav-right-dropDown">
      <img  src="@/assets/images/apphome/appHomeDropDpwn.png" alt @click="open"/>
      <ul class="drop-down-list" :class="{open: isOpen}">
        <div class="modal" @click.self="close"/>
        <li v-for="(item, index) in list" :key="index" @click="jumpPage(item.path)">
            {{$t(item.name)}}
        </li>
      </ul>
      <!-- @click="dropDown" -->
    </div>
    <!-- <div :class="[!isShow ? 'active' : '.is-active' ]"></div> -->
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [
        { id: 0, name: "home", path: '/', },
        { id: 1, name: "technology", path: '/appTechnology',},
        { id: 2, name: "developer", path: '/appDeveloper',},
        { id: 3, name: "browser", path: 'appBrowser',}
      ]
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
   
      return{
        isOpen:false
      } 
    },
  
  methods: {
    langChange() {
      const langType = this.$i18n.locale == "en" ? "zh" : "en";
      this.$i18n.locale = langType;
      localStorage.setItem("lang", langType);
    },
    dropDown(){
      this.isShow = !this.isShow
    },
    goBrowser() {
      window.open("http://browser-pro.TINK.io/");
    },
    jumpPage(path){
      
    if(path=== 'appBrowser'){
        this.goBrowser()
      }else{
        this.$router.push(path);
      }
      this.close();
    },
    open(){
      console.log('打开了');
      this.isOpen = true;
    },
    close(){
      console.log('关闭了');
      this.isOpen = false;
    },
  }
};
</script>

<style lang="scss" scoped>
.app-navigation {
  width: 100%;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding-top:0.46rem;
  .logo {
    color: #fff;
    img {
      width: 1.98rem;
      height: 0.46rem;
      margin-left: 0.45rem;
    }
  }
  .nav-right-dropDown {
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 0.34rem;
      height: 0.34rem;
      margin-right: 0.34rem;
      cursor: pointer;
    }
    .drop-down-list{
      position: absolute;
      top: 0.56rem;
      right: 0.17rem;
      background: rgba(0,0,0, 0.6);
      width: 2.3rem;
      padding: 0.18rem 0;
      border-radius: 0.05rem;
      display: none;
      &:before{
        content: '';
        position: absolute;
        top: -0.07rem;
        right: 0.25rem;
        width: 0;
        height: 0;
        border-left: 0.06rem solid transparent;
        border-right: 0.06rem solid transparent;
        border-bottom: 0.07rem solid rgba(0,0,0, 0.6);
      }
      &.open{
        display: block;
      }
      .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2000px;
        height: 2000px;
        z-index: 1;

      }
      >li{
        position: relative;
        height: 0.82rem;
        line-height: 0.82rem;
        color: #fff;
        font-size: 0.24rem;
        font-weight: 400;
        padding-left: 0.5rem;
        z-index: 2;
      }
    }
  }
}
</style>
