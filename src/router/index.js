import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import EpisodePage from '../pages/EpisodePage.vue'
import CharacterPage from '../pages/CharacterPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/episode/:id', component: EpisodePage, props: true },
  { path: '/character/:id', component: CharacterPage, props: true }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router