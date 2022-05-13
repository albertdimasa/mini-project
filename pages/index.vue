<template>
  <div>
    <Header />
    <b-container class="mt-3">
      <b-card
        overlay
        img-src="~/static/hero.jpg"
        img-alt="Card Image"
        img-height="400"
        text-variant="white"
      >
        <div class="d-flex flex-column justify-content-center h-100">
          <b-card-title class="h1 font-weight-bold">BOOKS BARTER</b-card-title>
          <b-card-text class="h4 font-weight-normal">
            Bertukar Buku Lebih Mudah Dengan Kami.</b-card-text
          >
        </div>
      </b-card>
      <hr />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardVue',
}
</script>

<style></style>
