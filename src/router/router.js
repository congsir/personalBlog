import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import indexContent from "../components/content/indexContent.vue"
import blog from "../components/content/blog.vue"
import tags from "../components/content/tags.vue"
import aboutMe from "../views/aboutMe.vue"
import timeLine from "../components/content/timeLine.vue"
import leaveMessage from "../components/content/leaveMessage.vue"
import article from "../components/content/article.vue"
import is_404 from "../views/404.vue"

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/aboutMe',
      component:aboutMe,
      meta:{
        title: "关于我"
      }
    },
    {
      path: '/',
      name: 'index',
      component:Index,
      meta:{
        title: "博客"
      },
      children:[
        {
          path:'',
          component:indexContent,
          meta:{
            title: "博客"
          },
        },
        {
          path:'/tagsArticleList',
          component:tags
        },
        {
          path:'/typeArticleList',
          component:blog
        },
        {
          path:'/timeLine',
          component:timeLine,
          meta:{
            title:"时间轴"
          }
        },
        {
          path:'/leaveMessage',
          component:leaveMessage,
          meta:{
            title:"留言"
          }
        },
        {
          path:'/article/:id',
          component:article,
          meta:{
            title:"文章"
          }
        },
        
      ]
    },
    {
      path:'*',
      component:is_404,
      meta:{
        title:"404"
      }
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

export default router;
