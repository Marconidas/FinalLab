<script setup>
import { ref, defineProps } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const pokemon = ref(props.pokemon)

const handleDelete = () => {
  pokemonStore.deletePokemon(pokemon.value.id) // Llama a la función para borrar el Pokémon
}
</script>

<template>
  <section>
    <p class="poke-title">{{ pokemon.name }}</p>
    <img :src="pokemon.image" alt="Name Image" />
    <p class="poke-description">{{ pokemon.description }}</p>
    <article>
      <p>Altura: {{ pokemon.altura }} m</p>
      <p>Peso: {{ pokemon.peso }} kg</p>
    </article>
    <button @click="handleDelete">Delete</button>
  </section>
</template>

<style scoped>
section {
  background-color: rgb(196, 199, 25);
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

p {
  width: 100%;
  text-align: center;
  margin: 5px 0;
}

img {
  max-width: 100%;
  max-height: 50%;
}

button {
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.poke-title {
  font-size: 1.5rem;
  font-weight: 900;
}

.poke-description {
  padding: 1.5rem;
}
</style>
