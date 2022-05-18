<template>
  <div id="content" class="d-flex">
    <Sidebar />
    <b-container class="py-3 vw-100">
      <SubHeader name="Koleksi Buku" />
      <b-button variant="success" to="/dashboard/tambah-buku"
        >Tambah Buku</b-button
      >
      <div class="mt-3">
        <template>
          <div v-if="$apollo.queries.books.error">Ups Error</div>
          <div v-else-if="$apollo.queries.books">
            <div class="d-flex flex-wrap justify-content-around">
              <CardDashboard
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
import ALL_BOOK_WHERE_USERID from '~/gql/queries/AllBookWhereUserId'
export default {
  name: 'BookView',
  middleware: 'loginOrNot',
  apollo: {
    books: {
      query: ALL_BOOK_WHERE_USERID,
      update: (data) => data.book_barter_books,
      variables() {
        return {
          userId: this.user.id,
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
