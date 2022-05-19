<template>
  <div id="content" class="d-flex">
    <Sidebar />
    <b-container class="py-3 vw-100">
      <SubHeader name="Detail Barter" />
      <b-table
        class="mt-5"
        striped
        hover
        bordered
        table-variant="light"
        :items="details"
        :fields="fields"
      >
        <template #cell(status)="data">
          <b-button
            v-if="data.item.status == false"
            v-b-tooltip.hover
            title="Menunggu"
            variant="warning"
            size="sm"
            ><b-icon icon="cloud-haze"></b-icon>
          </b-button>
          <b-button
            v-else
            v-b-tooltip.hover
            title="Disetujui"
            variant="primary"
            size="sm"
            ><b-icon icon="check"></b-icon>
          </b-button>
        </template>

        <template #cell(kontak)="data">
          <b-button
            v-b-tooltip.hover
            title="Whatsapp"
            :href="
              'https://api.whatsapp.com/send?phone=62' +
              data.item.user.phone_number
            "
            target="_blank"
            variant="success"
            size="sm"
            ><b-icon icon="whatsapp"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Email"
            :href="'mailto:' + data.item.user.email"
            target="_blank"
            variant="info"
            size="sm"
          >
            <b-icon icon="chat-left-text"></b-icon>
          </b-button>
        </template>

        <template #cell(action)="data">
          <b-button
            v-b-tooltip.hover
            title="Hapus"
            variant="danger"
            size="sm"
            @click="DELETE_BARTER(data.item.id)"
            ><b-icon icon="trash"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Ubah Status"
            variant="secondary"
            size="sm"
            @click="
              STATUS_BARTER(data.item.status, data.item.id, data.item.book.id)
            "
          >
            <b-icon icon="caret-down"></b-icon>
          </b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import DETAIL_BARTER_BY_USER from '~/gql/queries/DetailBarterByUser'
import DETAIL_BARTER_SUB from '~/gql/subscription/DetailBarterSubs'
export default {
  name: 'DetailBarterView',
  data() {
    return {
      fields: [
        {
          key: 'date',
          label: 'Tanggal',
          sortable: true,
        },
        {
          key: 'book.title',
          label: 'Judul Buku',
          sortable: true,
        },
        {
          key: 'alasan',
          label: 'Alasan',
          sortable: true,
        },
        {
          key: 'user.name',
          label: 'Nama Peminjam',
          sortable: true,
        },
        {
          key: 'status',
          label: 'Barter',
          sortable: true,
        },
        {
          key: 'kontak',
          label: 'Kontak',
        },
        {
          key: 'action',
          label: 'Action',
        },
      ],
    }
  },
  apollo: {
    details: {
      query: DETAIL_BARTER_BY_USER,
      update: (data) => data.book_barter_details,
      variables() {
        return {
          user: this.user.id,
        }
      },
      subscribeToMore: {
        document: DETAIL_BARTER_SUB,
        variables() {
          return {
            user: this.user.id,
          }
        },
        updateQuery: (prev, { subscriptionData }) => {
          return {
            book_barter_details: subscriptionData.data.book_barter_details,
          }
        },
      },
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    async STATUS_BARTER(value, id, book) {
      const data = {
        detailId: id,
        status: !value,
        bookId: book,
      }
      await this.$store.dispatch('STATUS_BARTER', data)
    },
    async DELETE_BARTER(id) {
      await this.$store.dispatch('DELETE_BARTER', id)
    },
  },
}
</script>

<style></style>
