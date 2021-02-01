<template>
  <nav id="sidebar" class="sidebar-wrapper">
    <div
      class="modal fade show"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      style="
        background: rgba(0, 0, 0, 0.2);
        display: block;
        z-index: -1;
        width: 100vw;
      "
      v-if="$store.state.toggled"
      @click="toggleSideBar"
    ></div>
    <!-- Sidebar brand start  -->
    <div class="sidebar-brand d-flex align-items-center mb-0">
      <a href="javascript:void(0)" class="logo">
        <img :src="`${publicPath}img/avatar.png`" alt="User Account" />
      </a>
      <div class="text-white">
        <span class="d-block">{{
          `${$store.state.user.firstname} ${$store.state.user.lastname}`
        }}</span>
        <span class="d-block">Tel: {{ $store.state.user.phone }}</span>
      </div>
    </div>
    <!-- Sidebar brand end  -->

    <!-- Sidebar content start -->
    <div
      class="slimScrollDiv"
      style="position: relative; overflow: hidden; width: auto; height: 100%"
    >
      <div
        class="sidebar-content"
        style="overflow: hidden; width: auto; height: 100%; overflow-y: scroll"
      >
        <!-- sidebar menu start -->
        <div class="sidebar-menu">
          <ul>
            <li class="header-menu pt-2">Navigation</li>
            <li>
              <router-link :to="{ name: 'account' }">
                <img
                  :src="`${publicPath}img/home.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'cars' }">
                <img
                  :src="`${publicPath}img/cars.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">Your Cars</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'requests' }">
                <img
                  :src="`${publicPath}img/requests.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">Requests</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'accountchangepassword' }">
                <img
                  :src="`${publicPath}img/history.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">History</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'accountchangepassword' }">
                <img
                  :src="`${publicPath}img/cog.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">Your Profile</span>
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0)" @click.prevent="signout">
                <img
                  :src="`${publicPath}img/shutdown.png`"
                  class="icon-img"
                  alt=""
                />
                <span class="menu-text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar menu end -->
      </div>
    </div>
    <!-- Sidebar content end -->
  </nav>
</template>
<script>
export default {
  name: "CustomerAside",
  data: () => ({}),
  created() {
    if (this.isEmpty(this.$store.state.user) && this.userLogged) {
      this.$store.dispatch("getRequest", "get_logged_user").then((response) => {
        this.$store.dispatch("setUser", response.data.user);
      });
    }
  },
  methods: {
    signout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    toggleSideBar() {
      document.getElementById("app-wrapper").classList.toggle("toggled");
      this.$store.state.toggled = !this.$store.state.toggled;
    },
  },
};
</script>
<style lang="css">
.page-wrapper
  .sidebar-wrapper
  .sidebar-menu
  ul
  li.active
  a.router-link-exact-active {
  background: #292929;
  position: relative;
  color: #c92f4e;
}
.page-wrapper
  .sidebar-wrapper
  .sidebar-menu
  ul
  li.active
  a.router-link-exact-active:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  right: 0px;
  margin: -12px 0 0 0;
  border: 12px solid;
  border-color: transparent #eff1f5 transparent transparent;
}
.page-wrapper .sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {
  content: "";
}
.sidebar-dropdown.active span.float-right:before {
  content: "\e9f2";
}
.page-wrapper
  .sidebar-wrapper
  .sidebar-menu
  .sidebar-dropdown
  .sidebar-submenu
  ul
  li
  a:before {
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e92f";
}
.page-wrapper
  .sidebar-wrapper
  .sidebar-menu
  ul
  li.active
  a.router-link-exact-active:after {
  border: unset;
}
.icon-img {
  border-radius: 0.052083333in;
  height: 26px;
  width: 19.5pt;
  margin-right: 15px;
  max-width: 100%;
  vertical-align: middle;
}
.page-wrapper .sidebar-wrapper .sidebar-menu ul li a .menu-text {
  line-height: 0.36875in;
  letter-spacing: 0.01785714em;
  font-size: 0.160416667in;
  white-space: nowrap;
  font-weight: 600;
}
</style>
