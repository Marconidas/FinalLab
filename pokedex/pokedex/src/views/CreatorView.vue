<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()

const name = ref('')
const description = ref('')
const image = ref('')
const altura = ref(0)
const peso = ref(0)

//Función para manejar el submit del formulario
const handleSubmit = async (e) => {
  e.preventDefault()
  const newPokemon = {
    name: name.value,
    description: description.value,
    image: image.value,
    altura: altura.value,
    peso: peso.value
  }
  try {
    await pokemonStore.createPokemon(newPokemon)
    alert('Pokemon creado exitosamente!')
  } catch (error) {
    console.error('Error creando el Pokemon:', error)
    alert('Error creando el Pokemon. Por favor, revisa la consola.')
  }
}
</script>

<template>
  <section>
    <h2>Pokemon Creator</h2>
    <br />
    <form @submit="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input
          style="width: 300px"
          v-model="name"
          type="text"
          id="name"
          placeholder="Enter pokemon name"
          required
        />
      </div>

      <div>
        <label for="description">Description:</label><br />
        <textarea
          style="resize: none"
          v-model="description"
          id="description"
          placeholder="Enter pokemon description"
          cols="50"
          required
        ></textarea>
      </div>

      <div>
        <label for="image">Image URL:</label>
        <input
          style="width: 300px"
          v-model="image"
          type="text"
          id="image"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div>
        <label for="altura">Altura:</label>
        <input
          style="width: 100px"
          v-model="altura"
          type="number"
          id="altura"
          min="0"
          step="0.01"
          placeholder="Enter pokemon altura"
          required
        />
      </div>

      <div>
        <label for="peso">Peso:</label>
        <input
          style="width: 100px"
          v-model="peso"
          type="number"
          id="peso"
          min="0"
          step="0.01"
          placeholder="Enter pokemon peso"
          required
        />
      </div>

      <div>
        <button type="submit">Create Pokemon</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 0 auto;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

h2 {
  text-align: center;
}
</style>
