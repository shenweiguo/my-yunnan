import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueResource from 'vue-resource'
import Register from '@/pages/register'
import Login from '@/pages/login'
import goumai from '@/pages/goumai'
import Tuijian from '@/pages/Tuijian'
import my from '@/pages/my'
import tousu from '@/pages/tousu'
import IndexLuobo from '@/components/INdexLuobo'
import haha from '@/pages/haha'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/Register',
    	component:Register
    },
    {
    	path:'/Login',
    	component:Login
    },
    {
    	path:'/goumai',
    	component:goumai
    },
    {
    	path:'/tuijian',
    	component:Tuijian
    }
    ,{
    	path:'/my',
    	component:my
    }
    ,{
    	path:'/tousu',
    	component:tousu
    },
    {
    	path:'/IndexLuobo',
    	component:IndexLuobo
    },
    {
    	path:'/haha',
    	component:haha
    }
   
  ]
})
