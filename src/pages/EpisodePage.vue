<template>
  <div v-if="episode === null">
    <p>Loading...</p>
  </div>
  <div class="episode-detail" v-else>
    <h1>{{ episode.name }}</h1>
    <p>Air Date: {{ episode.air_date }}</p>
    <p>Episode: {{ episode.episode }}</p>
    <p>Characters:</p>
    <ul>
      <li v-for="character in episode.characters" :key="character" @click="navigateToCharacter(character)">
        {{ character }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const episode = ref(null)

const getEpisode = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const data = await response.json()
  return data
}

onMounted(async () => {
  episode.value = await getEpisode(route.params.id)
})

const navigateToCharacter = (characterUrl) => {
  const characterId = characterUrl.split('/').pop()
  router.push(`/character/${characterId}`)
}
</script>

<style scoped>
.episode-detail {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>