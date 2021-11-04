<template>
    <div
      @click="handleClick"
      class="comn-button"
      :style="styles"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      :class="contianerClass"
    >
      <slot></slot>
    </div>
</template>
<script>
// import _ from 'lodash'
export default {
  props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
    contianerClass: {
      type: String,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
    // handleMouseover: _.debounce(function (){
    //    this.$emit('mouseover')
    // },150),
    handleMouseover() {
      this.$emit('mouseover')
    },
    // handleMouseleave: _.debounce(function (){
    //    this.$emit('mouseleave')
    // },150),
    handleMouseleave() {
      this.$emit('mouseleave')
    }
  }
}
</script>
<style lang="scss" scoped>
  .comn-button {
    display: inline-block;
    border-radius: 25px;
    background: #FF7054;
    box-shadow: 0px 6px 8px 0px rgba(231, 48, 5, 0.2);
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
  }
</style>