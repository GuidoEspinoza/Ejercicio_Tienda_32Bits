<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/busquedas">Búsquedas</router-link>
    <router-link to="/ventas">Ventas</router-link>
    <router-link to="/total">Total</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

#nav {
  padding: 30px;
  background-color: #0d161f;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 15px;
}

</style>
