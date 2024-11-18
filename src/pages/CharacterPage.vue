<template>
  <div v-if="character === null">
    <p>Loading...</p>
  </div>
  <div class="character-detail" v-else>
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" />
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Location: {{ character.location.name }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const character = ref(null)

const getCharacter = async (id) => {
  console.log('Fetching character', id)
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await response.json()
  return data
}

onMounted(async () => {
  character.value = await getCharacter(route.params.id)
  console.log('Character', character.value)
})
</script>

<style scoped>
.character-detail {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

img {
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>