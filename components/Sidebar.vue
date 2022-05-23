<template>
  <!-- Sidebar -->
  <b-col cols="2" class="bg-dark p-2 min-vh-100">
    <b-nav pills class="d-flex flex-column mt-3">
      <div class="text-center mb-3">
        <LogoMini />
      </div>
      <div class="no-text">
        <b-nav-item to="/dashboard/buku">Koleksi Buku</b-nav-item>
        <b-nav-item to="/dashboard/detail-barter">Detail Barter</b-nav-item>
        <b-nav-item active @click="SIGN_OUT">Sign Out</b-nav-item>
      </div>

      <div class="text-center icon">
        <b-nav-item to="/dashboard/buku">
          <b-icon icon="journal-bookmark"></b-icon>
        </b-nav-item>
        <b-nav-item to="/dashboard/detail-barter">
          <b-icon icon="people"></b-icon>
        </b-nav-item>
        <b-nav-item active @click="SIGN_OUT">
          <b-icon icon="door-open"></b-icon>
        </b-nav-item>
      </div>
    </b-nav>
  </b-col>
</template>

<script>
export default {
  name: 'SidebarComponent',
  methods: {
    SIGN_OUT() {
      this.$store.dispatch('SIGN_OUT')
    },
  },
}
</script>

<style scoped>
a {
  color: white;
  transition: 0.5s;
}

a:hover,
a:active {
  background-color: #ffeead;
  border-radius: 5px;
  color: #d9534f;
}

@media (max-width: 992px) {
  .icon {
    display: inline-block;
  }
  .no-text {
    display: none;
  }
}
@media (min-width: 992px) {
  .icon {
    display: none;
  }
  .no-text {
    display: inline-block;
  }
}
</style>
