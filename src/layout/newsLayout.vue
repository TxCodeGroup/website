<template>
  <div class="news-layout">
     <div class="news-nav-header-box">
      <div class="news-nav-header">
        <Navigation
          :styles="{
            paddingTop: 0,
            position: 'static',
          }"
        />
      </div>
    </div>
    <div class="news-body">
       <router-view/>
    </div>
     
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
export default {
  components: { Navigation,  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .news-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .news-nav-header-box {
    background: #7139ff;
    .news-nav-header {
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    .news-body {
      flex: 1;
      overflow: auto;
    }
  }
  }
</style>
