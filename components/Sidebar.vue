<template>
  <!-- Sidebar -->
  <b-col cols="2" class="bg-dark p-3 min-vh-100">
    <LogoMini />
    <b-nav pills class="d-flex flex-column mt-3">
      <b-nav-item to="/dashboard">Dashboard</b-nav-item>
      <b-nav-item to="/dashboard/book">Koleksi Buku</b-nav-item>
      <b-nav-item to="/dashboard/barter">Detail Barter</b-nav-item>
      <b-nav-item disabled>Coming Soon</b-nav-item>
      <b-nav-item active class="mt-5" @click="SIGN_OUT">Sign Out</b-nav-item>
    </b-nav>
  </b-col>
</template>

<script>
export default {
  name: 'SidebarComponent',
  methods: {
    SIGN_OUT() {
      this.$store.dispatch('SIGN_OUT')
    },
  },
}
</script>

<style scoped>
a {
  color: white;
  transition: 0.5s;
}

a:hover,
a:active {
  background-color: #ffeead;
  border-radius: 5px;
  color: #d9534f;
}
</style>
