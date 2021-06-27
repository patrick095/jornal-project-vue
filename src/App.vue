<template>
  <div id="nav">
    <router-link to="/">Resumo</router-link> |
    <router-link to="/revisao">Revisão</router-link>
  </div>
  <router-view/>
</template>

<style>
body {
padding: 0;
margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2e2e2;
  background-color: #292929;
  margin: 0;
  min-height: 100vh;
  width: 100vw;
}
#nav {
  padding: 30px;
  font-size: 22px;
}

#nav a {
  font-weight: bold;
  color: #245586;
  text-decoration: none;
  font-size: 22px;
}

#nav a.router-link-exact-active {
  color: #288cf0;
}
</style>
