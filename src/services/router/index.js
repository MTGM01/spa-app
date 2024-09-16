import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../components/Home.vue'
import Login from '../../components/Login.vue'
import Register from '../../components/Register.vue'
import Courses from '../../components/Courses.vue'
import Course from '../../components/Course.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'homePage',
      component: Home
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/courses',
      name: 'coursesPage',
      component: Courses
    },
    {
      path: '/course/:courseId',
      name: 'coursePage',
      component: Course
    },
  ]
})

export default router