<template>
  <div class="pb-3">
    <b-card
      class="overflow-hidden"
      style="max-width: 350px"
      :header="book.title"
      header-class="text-capitalize"
      header-tag="h5"
      :footer="`Penulis: ` + book.author"
      footer-bg-variant="dark"
      footer-text-variant="white"
    >
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="book.image_cover_url"
            :alt="book.title"
          ></b-card-img>
          <b-button variant="primary" class="mt-2 w-100">Edit </b-button>
          <b-dropdown
            text="Status"
            variant="outline-danger"
            class="mt-2 w-100"
            dropup
          >
            <b-dropdown-item @click="CHANGE_STATUS(book.id, 'tersedia')"
              >Tersedia</b-dropdown-item
            >
            <b-dropdown-item @click="CHANGE_STATUS(book.id, 'tersembunyi')"
              >Sembunyikan</b-dropdown-item
            >
            <b-dropdown-item @click="CHANGE_STATUS(book.id, 'barter')"
              >Barter</b-dropdown-item
            >
          </b-dropdown>
        </b-col>

        <b-col md="8">
          <b-badge
            v-if="book.status == 'tersembunyi'"
            variant="secondary"
            class="mx-3 text-capitalize"
            >{{ book.status }}</b-badge
          >
          <b-badge
            v-else-if="book.status == 'barter'"
            variant="info"
            class="mx-3 text-capitalize"
            >{{ book.status }}</b-badge
          >
          <b-badge v-else variant="success" class="mx-3 text-capitalize">{{
            book.status
          }}</b-badge>

          <b-card-text class="mx-3 text-break text-justify">
            <span v-if="!readMoreActivated">
              {{ book.summary.slice(0, 180) }}
            </span>
            <span v-if="!readMoreActivated" id="bacalengkap" @click="AKTIF_BACA"
              >... (baca selengkapnya)
            </span>
            <span v-if="readMoreActivated">{{ book.summary }}</span>
            <span v-if="readMoreActivated" id="bacalengkap" @click="AKTIF_BACA"
              >(persingkat)</span
            >
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardDashboardComponent',
  props: {
    book: Object,
    index: Number,
  },
  data() {
    return {
      readMoreActivated: false,
    }
  },
  methods: {
    AKTIF_BACA() {
      this.readMoreActivated = !this.readMoreActivated
    },
    CHANGE_STATUS(id, statusBook) {
      const data = {
        bookId: id,
        status: statusBook,
      }
      this.$store.dispatch('CHANGE_STATUS', data)
    },
  },
}
</script>

<style></style>
