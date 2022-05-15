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
          <b-card-title class="h1 font-weight-bold">BOOKS BARTER</b-card-title>
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
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export default {
  name: 'DashboardVue',
  apollo: {
    books: {
      query() {
        // eslint-disable-next-line eqeqeq
        if (this.user != '') {
          return gql`
            query MyQuery($user: String) {
              book_barter_books(
                where: { user: { _not: { name: { _eq: $user } } } }
              ) {
                id
                title
                summary
                image_cover_url
                author
                user {
                  name
                }
              }
            }
          `
        } else {
          return gql`
            query MyQuery {
              book_barter_books {
                id
                title
                summary
                image_cover_url
                author
                user {
                  name
                }
              }
            }
          `
        }
      },
      update: (data) => data.book_barter_books,
      variables() {
        // eslint-disable-next-line eqeqeq
        if (this.search != '') {
          return {
            user: this.user.name,
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
</style>
