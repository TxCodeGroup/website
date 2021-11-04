import Vue from 'vue'
import VueRouter from 'vue-router'
import appIndex from '../views/mobileTerminal/index.vue'



Vue.use(VueRouter)

const appRouter = [{
    path: '/',
    name: 'appIndex',
    component: appIndex,
   
    },
    //   {
    //     path: '/newsLayout',
    //     name: 'newsLayout',
    //     component: NewsLayout,
    //     redirect: '/news',
    //     children: [
    //       {
    //         path: '/news',
    //         name: 'news',
    //         component: News,
    //         meta: { activeId: 2 },
    //       },
    //       {
    //         path: '/newsDetail',
    //         name: 'newsDetail',
    //         component: NewsDetail,
    //         meta: { activeId: 2 },
    //       },
    //       {
    //         path: '/contributor',
    //         name: 'contributor',
    //         component: Contributor,
    //         meta: { activeId: 2 },
    //       }
    //     ]
    //   }

]
// console.log("1111",appRouter)

// const appRouter = new VueRouter({
//     mode: 'hash',
//     base: process.env.BASE_URL,
//     routes:appRoute,
//     scrollBehavior(to, from, saveTop) {
//         return saveTop ? saveTop : {
//             x: 0,
//             y: 0
//         }
//     },
// })

export default appRouter