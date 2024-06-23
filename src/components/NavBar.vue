<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/favourites/">Favourites</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
nav {
  padding: 10px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

li {
  color: white;
}

a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
