import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../components/contact.vue'
import HomaPage from '../components/HomePage.vue'
import About from '../components/About.vue'
import Service from "../components/Service.vue";
import QuestionPage from "../components/QuestionPage.vue";
import test from "../components/test.vue";


const routes = [
  {
    path: '/test',
    name: 'test',
    component: test

  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  },
  {
    path:'/',
    name:'homepage',
    component: HomaPage
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path:'/service',
    name:'service',
    component: Service
  },
  {
    path:'/question',
    name:'question',
    component: QuestionPage
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' };
  }
})

export default router