<template>
  <b-row align-v="stretch" class="vh-100 vw-100">
    <!-- Sidebar -->
    <b-col cols="2" class="bg-dark p-3">
      <h4 class="text-white text-center">Barter Books</h4>
      <b-nav pills class="d-flex flex-column mt-3">
        <b-nav-item active>Dashboard</b-nav-item>
        <b-nav-item disabled>Coming Soon</b-nav-item>
      </b-nav>
    </b-col>

    <!-- Navbar -->
    <b-col cols="10" class="bg-danger">
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'DashboardView',
  middleware: 'loginOrNot',
}
</script>

<style></style>
