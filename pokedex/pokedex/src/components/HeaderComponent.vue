<script setup></script>

<template>
  <header>
    <div class="logo-image">
      <img src="../../public/logo.png" alt="LOGO Image" />
    </div>
    <div class="bar-menu">
      <router-link to="/" class="text-menu">Go to HOME</router-link>
      <router-link to="/creator" class="text-menu">ADD Pokemon</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(108, 148, 185);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  height: 10vh;
}
.bar-menu {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  padding-bottom: 5px;
}

.text-menu {
  color: #bebb30;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.5rem;
}
</style>
