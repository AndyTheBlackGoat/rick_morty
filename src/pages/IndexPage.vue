<template>
  <div class="episodes-page">
    <h1>Episodes</h1>
    <div v-if="episodes.length === 0">
      <p>Loading...</p>
    </div>
    <div v-else class="episodes-list">
      <EpisodeCard v-for="episode in episodes" :key="episode.id" :episode="episode" @navigate="navigateToEpisode" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EpisodeCard from '../components/EpisodeCard.vue'

const episodes = ref([])

const getAllEpisodes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode')
  const data = await response.json()
  return data.results
}

onMounted(async () => {
  episodes.value = await getAllEpisodes()
})

const router = useRouter()

const navigateToEpisode = (id) => {
  router.push(`/episode/${id}`)
}
</script>

<style scoped>
.episodes-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.episodes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.episode-card {
  flex: 1 1 calc(33.333% - 16px);
  box-sizing: border-box;
}
</style>