import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'




Vue.use(VueRouter)

const pcRouter = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: Layout,
  //   children: [
     
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: Home,
  //       meta: { activeId: 0 },
  //     },
     
  //   ]
  // },
 
]
// console.log("2222",pcRouter)
// const pcRouter = new VueRouter({
//   mode: 'hash',
//   base: process.env.BASE_URL,
//   routes:pcRoute,
//   scrollBehavior(to,from,saveTop){
//     return saveTop ? saveTop : { x: 0, y: 0 }
//   },
// })

export default pcRouter
