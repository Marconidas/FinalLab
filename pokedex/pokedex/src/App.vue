<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <section class="big-frame">
    <HeaderComponent />
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </section>
</template>

<style scoped>
.big-frame {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
