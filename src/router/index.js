import Vue from 'vue'
import Router from 'vue-router'
import People from '@/views/People';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'People',
      component: People
    }
  ]
})
