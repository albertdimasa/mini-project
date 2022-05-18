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
          <b-button href="#" variant="outline-danger" class="mt-3 w-100">
            {{ book.user.name }}
          </b-button>
          <b-button
            variant="primary"
            class="mt-1 w-100"
            :to="{
              name: 'slug',
              params: { slug: TO_SLUG(book.title) },
            }"
            >Barter
          </b-button>
        </b-col>
        <b-col md="8">
          <b-badge variant="success" class="mx-3 text-capitalize">{{
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
  name: 'CardComponent',
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
    TO_SLUG(value) {
      value = value
        .toLowerCase() // LowerCase
        .replace(/\s+/g, '-') // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`)
      return value
    },
  },
}
</script>

<style>
#bacalengkap {
  color: blue;
  cursor: pointer;
}
</style>
