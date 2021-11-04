import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import appRouter from './appIndex.js'
import pcRouter from './pcIndex.js'

var clientWidth = document.documentElement.clientWidth
console.log("clientWidth", clientWidth)
let collectionRouter = []
if (clientWidth >= 640) {
  console.log("使用PC端路由")
  collectionRouter = pcRouter
  console.log("pcRouter",pcRouter)
  document.body.style="min-width:1235px"
} else {
  console.log("使用移动端路由")
  collectionRouter = appRouter
  console.log("appRouter",appRouter)
}

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, saveTop) {
    return saveTop ? saveTop : {
      x: 0,
      y: 0
    }
  },
  routes: collectionRouter
})