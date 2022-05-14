<template>
  <div class="main">
    <b-form class="form-register mx-auto w-100" @submit.prevent="onsubmit">
      <Logo />
      <b-form-input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Name"
      />

      <b-form-input
        v-model="phone_number"
        type="number"
        class="form-control"
        placeholder="Phone number"
      />
      <b-form-input
        v-model="email"
        type="email"
        class="form-control"
        placeholder="Email address"
      />
      <b-form-input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
      />

      <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">
        Register
      </button>
      <p class="mt-1 mb-5">
        Do you have an account? please
        <NuxtLink to="login">login</NuxtLink>
      </p>
    </b-form>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
export default {
  name: 'RegisterView',
  middleware: 'isLogin',
  data() {
    return {
      name: '',
      phone_number: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async onsubmit() {
      const credential = {
        email: this.email,
        name: this.name,
        phone_number: this.phone_number,
        password: this.password,
      }
      await this.$store.dispatch('SIGN_UP', credential)
    },
  },
}
</script>

<style>
.main {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #ffeead;
}

.form-register {
  max-width: 330px;
}

.form-control {
  height: 50px;
}
</style>
