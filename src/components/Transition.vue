<template>
   <transition name="fade-transform" mode="out-in">
     <slot></slot>
    </transition>
</template>
<script>
</script>
<style lang="scss" scoped>
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>