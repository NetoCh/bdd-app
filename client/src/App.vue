<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/equipo">Equipo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~sweetalert2/dist/sweetalert2.min.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
