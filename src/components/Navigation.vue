<template>
  <div class="comn-navigation" :style="styles">
    <div class="logo">
      <img src="@/assets/images/home/logo.png" alt="">
    </div>
    <div class="nav-contianer">
        <router-link
            exact
          v-for="(item, index) in list"
          :key="index"
          class="nav-item"
          :to="`/${item.path}`"
        >
          {{$t(item.name)}}
        </router-link >
      <div
        class="nav-item"
        @click="goBrowser"
      >{{$t('browser')}}</div>
      <!-- <div @click="langChange" class="language-button">{{langType}}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ([
        { id: 0, name: 'home', path: '', active: true },
        { id: 1, name: 'technology',path: 'technology', active: false },
        { id: 2, name: 'developer', path: 'developer',active: false },
      ]),
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {

    }
  },
  computed: {
    langType() {
      return this.$i18n.locale == 'en' ? 'Zh' : 'En'
    }
  },
  methods: {
    langChange() {
      const langType = this.$i18n.locale == 'en' ? 'zh' : 'en'
      this.$i18n.locale = langType;
      localStorage.setItem('lang', langType)
    },
    goBrowser() {
      window.open("https://browser.TINK.io");

    },

  }
}
</script>

<style lang="scss" scoped>
  .comn-navigation {
    width: 100%;
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding-top: 42px;
    .logo {
      color: #fff;
    }
    .nav-contianer {
      display: flex;
      align-items: center;
      .nav-item {
        position: relative;
        text-align: center;
        font-size: 18px;
        color: #EBD5FF;
        margin-right: 81px;
        cursor: pointer;
      }
      .router-link-active {
        color: #fff;
        &:after {
        content: '';
        width: 20px;
        height: 3px;
        background: #fff;
        position: absolute;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
      }
      }
      .language-button {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: fuchsia;
        background: #EBD5FF;
        border-radius: 2px;
        cursor: pointer;
      }
    }

  }
</style>
