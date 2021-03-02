<template>
  <div class="page-wrapper" id="app-wrapper">
    <CustomerAside />
    <div class="page-content">
      <HeaderCustomer v-if="userLogged" />
      <div
        class="main-container"
        :class="{ 'px-0': isMobile && $route.name != 'account' }"
      >
        <div class="app-content pt-5">
          <Offline v-if="$store.state.offlineMode" />
          <router-view v-else />
        </div>
        <!-- <FooterCustomer /> -->
      </div>
    </div>
    <div
      id="loading-wrapper"
      v-if="$store.state.isLoading && $store.state.activeBtn === null"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <bottom-drawer v-if="$store.state.pendingRequest">
      <img
        slot="overlaycontent"
        :src="`${publicPath}img/loading.gif`"
        class="img-fluid mx-auto"
      />
      <div slot="contents">
        <div class="text-center w-100">
          <h5 class="font-weight-bold text-primary mb-0">
            Waiting for Garage's reply...
          </h5>
          <hr />
          <p>You have a pending request</p>
          <div class="d-flex">
            <div
              class="bg-white img-thumbnail rounded-circle mx-auto"
              style="padding: 6px; width: 45px; height: 45px"
            >
              <img
                :src="`${publicPath}img/icons_delete.png`"
                class="img-fluid"
                alt
              />
            </div>
          </div>
          <p style="color: #000 !important" class="mt-2">Cancel this Request</p>
        </div>
      </div>
    </bottom-drawer>
  </div>
</template>
<script>
import HeaderCustomer from "./views/Header.vue";
import CustomerAside from "./views/CustomerAside";
import Offline from "./views/Offline";
export default {
  name: "app",
  components: {
    HeaderCustomer,
    CustomerAside,
    Offline,
  },
  data: () => ({
    isMobile: false,
    status: null,
  }),
  created() {
    this.checkMobileEnv();
    this.getDriverLocation();
  },
  methods: {
    getDriverLocation() {
      const _vm = this;
      return new Promise((resolve, reject) => {
        function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          _vm.$store.dispatch("setCurrentLocation", {
            lat: latitude,
            long: longitude,
          });
          resolve();
        }
        function error() {
          console.log("Error");
          reject();
        }
        if (!navigator.geolocation) {
          reject();
        } else {
          navigator.geolocation.getCurrentPosition(success, error);
        }
      });
    },
    checkMobileEnv() {
      if (matchMedia) {
        const mq = window.matchMedia("(max-width: 768px)");
        mq.addListener(this.WidthChange);
        this.WidthChange(mq);
      }
    },
    WidthChange(mq) {
      this.isMobile = mq.matches;
    },
    setActiveRouter() {
      return new Promise((resolve) => {
        let elts = document.getElementsByClassName("router-link-exact-active");
        if (elts.length) {
          elts[0].parentElement.classList.add("active");
          resolve(true);
        }
      });
    },
  },
  updated() {
    this.setActiveRouter();
  },
};
</script>

<style lang="css">
.form-group {
  position: relative;
  margin-bottom: 1.4rem;
}
label.control-label {
  color: #888da8;
  font-weight: normal;
  margin-bottom: 0.3rem;
}

label,
output {
  display: inline-block;
}
.form-control {
  display: block;
  width: 100%;
  height: 47px;
  font-weight: 400;
  background-clip: padding-box;
  border: 1px solid #e6ecf5;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-clip: padding-box;
  border: 1px solid #e6ecf5;
  font-size: 0.875rem;
  color: #515365;
}
select.form-control {
  height: auto !important;
  padding-left: 0.7rem !important;
}
.btn {
  padding: 0.5rem 2.57rem;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 500;
  border-radius: 0.25rem;
}
.form-group {
  margin: 0 0 0.7rem 0 !important;
}
.custom-select:focus {
  box-shadow: unset;
}
@media (max-width: 280px) {
}
@media (min-width: 576px) {
}
@media (max-width: 479px) {
}
</style>
