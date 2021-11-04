export default {
  methods: {
    initAnimation() {
      this.$nextTick(() => {
        const wow = new this.$WoW({
          boxClass: "wow", ///动画元件css类（默认为wow）
          animateClass: "animated", //动画css类（默认为animated）
          offset: 0, //到元素距离触发动画（当默认为0）
          mobile: true, //在移动设备上触发动画（默认为true）
          live: true, //对异步加载的内容进行操作（默认为true）
        });
        wow.init();
      });
    },
  },
  mounted () {
    this.initAnimation()
  }
}