<template>
  <header
    class="header pl-1 align-items-center"
    :class="{ 'map-header': currentRouteName === 'map' }"
  >
    <div class="toggle-btns">
      <a id="toggle-sidebar" href="javascript:void(0)" @click="toggleSideBar">
        <img
          :src="`${publicPath}img/menu.png`"
          class="img img-fluid"
          style="width: 35px"
        />
      </a>
    </div>
    <div
      class="d-flex w-100 pl-3 align-items-center"
      v-if="currentRouteName !== 'map'"
    >
      <h4 class="font-weight-bold mb-0 text-primary ml-2">YEGO Cabs ltd</h4>
      <a href="javascript:void(0)" class="ml-auto">
        <img
          :src="`${publicPath}img/avatar.png`"
          alt="User Account"
          style="width: 28px; height: 28px"
        />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data: () => ({}),
  created() {},
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    togglePinned() {
      document.getElementById("app-wrapper").classList.toggle("pinned");
    },
    toggleSideBar() {
      document.getElementById("app-wrapper").classList.toggle("toggled");
      this.$store.state.toggled = !this.$store.state.toggled;
    }
  }
};
</script>
<style lang="css">
.navbar .navbar-menu-wrapper {
  box-shadow: 6px 16px 31px -18px #b7bcd1;
  -webkit-box-shadow: 6px 16px 31px -18px #b7bcd1;
  -moz-box-shadow: 6px 16px 31px -18px #b7bcd1;
  -ms-box-shadow: 6px 16px 31px -18px #b7bcd1;
}
@media (max-width: 576px) {
  .header-actions > li:first-child {
    display: block;
  }
}
.user-img.away i {
  font-size: 30px;
}
.noti-details.text-dark {
  color: #000 !important;
  font-weight: bold;
}
.header {
  background: #fff !important;
  box-shadow: 0 0.75pt 0 0 rgba(139, 141, 157, 0.05),
    10px 0.75pt 5.25pt 0 rgba(65, 71, 108, 0.15) !important;
  margin-bottom: 1rem;
}
.header.map-header {
  background: transparent !important;
  box-shadow: unset !important;
  width: 40px !important;
}
.header .toggle-btns #pin-sidebar:hover,
.header .toggle-btns #toggle-sidebar:hover {
  background: #f6f8fa;
  border: 1px solid #d7dbe2;
  border-bottom: 1px solid #d7dbe2;
  outline: unset;
}
@media screen and (max-width: 768px) {
  .page-wrapper.toggled .header {
    left: 0px !important;
  }
}
</style>
