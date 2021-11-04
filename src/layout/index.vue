<template>
  <div class="layout">
    <!-- <div class="nav-box">
      <Navigation/>
    </div> -->
   
      <router-view/>
  </div>
</template>
<script>
// import Navigation from '@/components/Navigation'
export default {
  // components: { Navigation,  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
    .nav-box {
      position: relative;
      width: 1120px;
      margin: 0 auto;
      
    }
  }
</style>
