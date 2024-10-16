import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', () => {
  let arrayPokemon = ref([])

  //Endpoint Base
  const baseURL = 'http://localhost:8080/api/pokemons'

  async function createPokemon(pokemon) {
    try {
      console.log(pokemon)
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      const newPokemon = await response.json()
      arrayPokemon.value.push(newPokemon)
    } catch (error) {
      console.error('Error al crear Pokemon:', error)
    }
  }

  async function fetchPokemon() {
    try {
      const response = await fetch(baseURL)
      if (!response.ok) {
        throw new Error('Error al obtener los pokemons: ' + response.statusText)
      }
      const pokemons = await response.json()
      arrayPokemon.value = pokemons
    } catch (error) {
      console.error('Error fetching pokemons:', error)
    }
  }

  async function deletePokemon(id) {
    await fetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    })
    arrayPokemon.value = arrayPokemon.value.filter((pokemon) => pokemon.id !== id) // Actualiza la lista de pokemons
  }

  return { arrayPokemon, createPokemon, fetchPokemon, deletePokemon }
})
