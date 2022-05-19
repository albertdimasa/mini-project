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
        :tbody-tr-class="rowClass"
      >
        <template #cell(action)="data">
          <b-button
            :href="
              'https://api.whatsapp.com/send?phone=62' +
              data.item.user.phone_number
            "
            target="_blank"
            variant="success"
            size="sm"
            >Whatsapp</b-button
          >
          <b-button
            :href="'mailto:' + data.item.user.email"
            target="_blank"
            variant="info"
            size="sm"
            >Email</b-button
          >
        </template>
        <template #cell(status)="data">
          <b-button
            v-if="status == false"
            variant="danger"
            size="sm"
            @click="changeStatus(data.item.status)"
            >Review</b-button
          >
          <b-button
            v-else
            variant="success"
            size="sm"
            @click="changeStatus(data.item.status)"
            >Barter</b-button
          >
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import DETAIL_BARTER_BY_USER from '~/gql/queries/DetailBarterByUser'
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
          label: 'Status',
          sortable: true,
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
  methods: {
    rowClass(item, type) {
      if (!item || type !== 'column') return
      if (item.status === true) return 'table-success'
      if (item.status === false) return 'table-danger'
    },
  },
}
</script>

<style></style>
