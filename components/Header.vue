<template>
  <div id="main">
    <b-container>
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand>
          <NuxtLink to="/">
            <b-img-lazy center src="~/static/logo.png" alt="" width="50" />
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Search -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="md"
                class="my-2"
                style="padding-right: 10rem"
                placeholder="search"
              ></b-form-input>
            </b-nav-form>
          </b-navbar-nav>

          <!-- Login and Register -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav v-if="user == ''">
              <b-nav-item to="/login" class="mr-5">Login</b-nav-item>
              <b-button
                size="md"
                to="/register"
                style="background-color: #ffad60; border-style: none"
                >Register</b-button
              >
            </b-navbar-nav>

            <b-nav-item-dropdown v-else right>
              <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
              <template #button-content>
                <em>{{ user.name }}</em>
              </template>
              <b-dropdown-item href="#" @click="SIGN_OUT"
                >Sign Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    user() {
      return this.$store.state.user
    },
  },

  methods: {
    SIGN_OUT() {
      this.$store.dispatch('SIGN_OUT')
    },
  },
}
</script>

<style scoped>
#main {
  background-color: #d9534f;
}
</style>
