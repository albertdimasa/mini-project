<template>
  <div class="main">
    <b-form class="form-register mx-auto w-100">
      <b-img-lazy center src="~/static/logo.png" alt="" width="200" />

      <b-form-input type="text" class="form-control" placeholder="Name" />

      <b-form-input
        type="number"
        class="form-control"
        placeholder="Phone number"
      />
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
export default {
  name: 'RegisterView',
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
