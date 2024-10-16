<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()
pokemonStore.fetchPokemon()
</script>

<template>
  <section class="pokemon-show">
    <PokemonCard
      class="margin"
      v-for="pokemon in pokemonStore.arrayPokemon"
      :pokemon="pokemon"
      :key="pokemon.id"
    ></PokemonCard>
  </section>
</template>

<style scoped>
.pokemon-show {
  display: flex;
  flex-wrap: wrap;
}

.margin {
  margin: 10px;
}
</style>
