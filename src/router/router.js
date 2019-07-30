import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import indexContent from "../components/content/indexContent.vue"
import blog from "../components/content/blog.vue"
import siteDesign from "../components/content/siteDesign.vue"
import design from "../components/content/design.vue"
import aboutMe from "../components/content/aboutMe.vue"
import timeLine from "../components/content/timeLine.vue"
import blogRoute from "../components/content/blogRoute.vue"
import leaveMessage from "../components/content/leaveMessage.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component:Index,
      children:[
        {
          path:'',
          component:indexContent
        },
        {
          path:'/blog',
          component:blog
        },
        {
          path:'/siteDesign',
          component:siteDesign
        },
        {
          path:'/design',
          component:design
        },
        {
          path:'/aboutMe',
          component:aboutMe
        },
        {
          path:'/timeLine',
          component:timeLine
        },
        {
          path:'/blogRoute',
          component:blogRoute
        },
        {
          path:'/leaveMessage',
          component:leaveMessage
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
