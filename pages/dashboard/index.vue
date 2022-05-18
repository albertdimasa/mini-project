<template>
  <div id="content" class="d-flex">
    <Sidebar />
    <b-container class="py-3 vw-100">
      <SubHeader name="Dashboard" />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  middleware: 'loginOrNot',
}
</script>

<style>
#content {
  background-color: #ffeead;
}
</style>
