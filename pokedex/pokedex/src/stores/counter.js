import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
/************************************************/
//import { ref, computed } from 'vue'
//import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', ()=>{

    const user = {
        nombre: "Marcos",
        apellido: "Perez",
        localizacion: "Barcelona",
        imagen: "url"
    }

    const counter = ref(0);
    const doubleCounter = computed(()=> counter.value*2)

    function increment(){
        counter.value++;
    }


    return { user, counter, doubleCounter, increment}
})