<template>
  <div id="content" class="d-flex">
    <Sidebar />
    <b-container class="py-3 vw-100">
      <SubHeader name="Koleksi Buku" />
      <b-form class="form-signin mx-auto w-100" @submit.prevent="ON_SUBMIT">
        <b-row>
          <b-col>
            <h5 class="pb-2">Form Tambah Buku</h5>
            <!-- Form -->
            <b-form-input
              v-model="title"
              type="text"
              class="mb-3"
              placeholder="Judul buku"
              required
            />
            <b-form-textarea
              id="textarea"
              v-model="summary"
              placeholder="Ceritakan singkat isi buku"
              maxlength="300"
              rows="6"
              no-resize
              required
            ></b-form-textarea>
            <b-form-text>
              Ceritakan singkat apa yang menarik (maksimal 300 karakter).
            </b-form-text>
            <b-form-input
              v-model="author"
              type="text"
              class="my-3"
              placeholder="Penulis buku"
              required
            />

            <b-form-input
              v-model="image_cover_url"
              type="text"
              placeholder="Url cover buku"
              required
            />
            <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">
              Tambah Buku
            </button>
          </b-col>
          <b-col>
            <!-- Preview Cover -->
            <h5 class="pb-2">Preview Cover Buku</h5>
            <b-img
              v-if="image_cover_url != ''"
              thumbnail
              fluid
              :src="image_cover_url"
              width="280px"
              alt="Preview Cover Buku"
            ></b-img>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TambahBukuView',
  middleware: 'loginOrNot',
  data() {
    return {
      title: '',
      summary: '',
      author: '',
      image_cover_url: '',
      user_id: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    async ON_SUBMIT() {
      const book = {
        title: this.title,
        summary: this.summary,
        author: this.author,
        image_cover_url: this.image_cover_url,
        user_id: this.user.id,
      }
      await this.$store.dispatch('ADD_BOOK', book)
      this.$router.go('/dashboard/book')
    },
  },
}
</script>

<style></style>
