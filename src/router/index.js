import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from "@/components/two";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component: one
    },
    {
      path: '/two',
      name: 'Two',
      component: two
    }
  ]
})
