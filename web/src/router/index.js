import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import Archive from '../views/Archive.vue'
import Category from '../views/Category.vue'
import Label from '../views/Label.vue'
import Project from '../views/Project.vue'
import Error from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/content/:id',
    name: 'content',
    component: Content,
    props: true
  },

  {
    path: '/archive',
    name: 'archive',
    component: Archive
  },

  {
    path: '/categories',
    name: 'category',
    component: Category
  },

  {
    path: '/label',
    name: 'label',
    component: Label
  },

  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path:'/404',
    name:'error',
    component:Error
  },
  {
    path: '*',
    redirect:'/404'
  }
]

const router = new VueRouter({
  routes
})
export default router
