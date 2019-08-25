<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
      <b-nav-item :to="{ name: 'ReposList' }">List of Repositories</b-nav-item>
      <b-nav-item href="#">X</b-nav-item>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
