import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: loadPage('QuizPage')
  },
  {
    path: '/results',
    name: 'Results',
    component: loadPage('ResultsPage')
  },
  {
    path: '/characters',
    name: 'CharactersPage',
    component: loadPage('CharactersPage')
  },
  {
    path: '/dungeon-test',
    name: 'DungeonTest',
    component: loadPage('DungeonTestPage')
  },
  {
    path: '/access-test',
    name: 'AccessTest',
    component: loadPage('AccessTestPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
