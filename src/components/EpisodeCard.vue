<template>
  <div class="episode-card" @click="goToEpisode">
    <h2>{{ episode.name }}</h2>
    <p>Air Date: {{ episode.air_date }}</p>
    <p>Episode: {{ episode.episode }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  episode: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['navigate'])

const goToEpisode = () => {
  console.log('Navigating to episode', props.episode.id)
  emits('navigate', props.episode.id)
}
</script>

<style scoped>
.episode-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
}
</style>