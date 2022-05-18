<template>
  <div id="content">
    <Header />
    <b-container class="py-3">
      <b-card
        overlay
        img-src="~/static/hero.jpg"
        img-alt="Card Image"
        img-height="400"
        text-variant="white"
      >
        <div class="d-flex flex-column justify-content-center h-100">
          <b-card-title class="h1 font-weight-bold">BARTER BOOK</b-card-title>
          <b-card-text class="h4 font-weight-normal">
            Bertukar Buku Lebih Mudah Dengan Kami.</b-card-text
          >
        </div>
      </b-card>
      <div class="mt-5">
        <template>
          <div v-if="$apollo.queries.books.error">Ups Error</div>

          <div v-else-if="$apollo.queries.books">
            <div class="d-flex flex-wrap justify-content-around">
              <Card
                v-for="(book, index) in books"
                :key="index"
                :book="book"
                :index="book.id"
              />
            </div>
          </div>
          <div v-else class="loading" />
        </template>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import ALL_BOOK_LANDING_PAGE from '~/gql/queries/AllBookLandingPage'
import ALL_BOOK from '~/gql/queries/AllBook'
export default {
  name: 'DashboardVue',
  apollo: {
    books: {
      query() {
        // eslint-disable-next-line eqeqeq
        if (this.user != '') {
          return ALL_BOOK_LANDING_PAGE
        } else {
          return ALL_BOOK
        }
      },
      update: (data) => data.book_barter_books,
      variables() {
        // eslint-disable-next-line eqeqeq
        if (this.search != '') {
          return {
            user: this.user.id,
          }
        }
      },
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style>
#content {
  background-color: #ffeead;
}
.loading {
  margin: 20px auto 0;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
</style>
