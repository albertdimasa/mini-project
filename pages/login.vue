<template>
  <div class="main">
    <b-form class="form-signin mx-auto w-100">
      <b-img-lazy center src="~/static/logo.png" alt="" width="200" />

      <b-form-input
        type="email"
        class="form-control"
        placeholder="Email address"
      />

      <b-form-input
        type="password"
        class="form-control"
        placeholder="Password"
      />

      <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">
        Sign in
      </button>
      <p class="mt-1 mb-5">
        <NuxtLink to="register">register</NuxtLink> if you don’t have an account
      </p>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
}
</script>

<style>
.main {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #ffeead;
}

.form-signin {
  max-width: 330px;
}

.form-control {
  height: 50px;
}
</style>
