<template>
  <div class="appLayout">
    <div class="nav-box">
      <appNavigation/>
    </div>
   
      <router-view/>
  </div>
</template>
<script>
import appNavigation from '@/components/appNavigation'
export default {
  components: { appNavigation,  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .appLayout {
    width: 6.4rem;
    height: 100%;
    .nav-box {
      position: relative;
      width: 6.4rem;
      margin: 0 auto;
      
    }
  }
</style>
