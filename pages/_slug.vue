<template>
  <div id="detailBook">
    <Header />
    <b-container id="bookContent" class="py-3">
      <b-row class="w-100 py-3 bg-white">
        <b-col md="3">
          <b-img-lazy
            left
            thumbnail
            fluid
            :src="book.image_cover_url"
            :alt="book.title"
          ></b-img-lazy>
        </b-col>
        <b-col md="9" class="text-start px-5">
          <h1 class="text-capitalize">
            {{ book.title }}
          </h1>
          <h5 class="text-muted">{{ book.author }}</h5>
          <p class="text-justify">{{ book.summary }}</p>
          <hr />
          <h4>Alasanmu</h4>
          <b-form @submit.prevent @submit="USER_BARTER(alasan)">
            <b-form-textarea
              id="textarea"
              v-model="alasan"
              placeholder="Enter something..."
              rows="3"
              no-resize
              required
            ></b-form-textarea>
            <b-form-text>
              Masukkan alasanmu kenapa memerlukan buku ini.
            </b-form-text>
            <b-button
              class="mt-3 font-weight-bold"
              type="submit"
              size="md"
              style="background-color: #d9534f; border-style: none"
              >BARTER</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'BookView',
  middleware: 'loginOrNot',
  data() {
    return {
      alasan: '',
    }
  },
  computed: {
    book() {
      return this.$store.state.book
    },
    user() {
      return this.$store.state.user
    },
  },
  mounted() {
    this.GET_BOOK(this.$route.params.slug)
  },
  methods: {
    async GET_BOOK(slug) {
      await this.$store.dispatch('GET_BOOK', slug)
    },
    toDate() {
      const today = new Date()

      return (
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()
      )
    },
    async USER_BARTER(InputAlasan) {
      const data = {
        book_id: this.book.id,
        peminjam_id: this.user.id,
        date: this.toDate(),
        alasan: InputAlasan,
      }
      // console.log(data)
      await this.$store.dispatch('USER_BARTER', data)
    },
  },
}
</script>

<style scoped>
#detailBook {
  background-color: #ffeead;
  height: 100vh;
}
#bookContent {
  margin-top: 5rem;
}
</style>
