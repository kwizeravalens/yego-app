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
      v-if="
        $store.state.isLoading &&
          $store.state.activeBtn === null &&
          !this.$store.state.garage
      "
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <bottom-drawer v-if="garage || this.$store.state.garage">
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
          <h6>You have a pending request</h6>
          <div class="border py-2 px-3">
            <p class="mb-0">Garage Name: {{ garage.garage_name || "N/A" }}</p>
            <p class="mb-0">Phone Number: {{ garage.phone || "N/A" }}</p>
          </div>
          <div class="d-flex">
            <div
              class="bg-white img-thumbnail rounded-circle mx-auto"
              style="padding: 6px; width: 45px; height: 45px"
              @click="cancelRequest"
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
    Offline
  },
  data: () => ({
    isMobile: false,
    status: null
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
            long: longitude
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
      return new Promise(resolve => {
        let elts = document.getElementsByClassName("router-link-exact-active");
        if (elts.length) {
          elts[0].parentElement.classList.add("active");
          resolve(true);
        }
      });
    },
    cancelRequest() {
      let requestId = this.requestId || this.$store.state.requestId;
      this.$store
        .dispatch("postRequest", {
          formData: this.formData({ requestId: requestId }),
          url: "cancel_request"
        })
        .then(response => {
          if (response.data.success) {
            this.$store.dispatch("cancelRequest");
          }
        });
    }
  },
  updated() {
    this.setActiveRouter();
  },
  computed: {
    garage: function() {
      return this.$store.getters.garage;
    },
    requestId: function() {
      return this.$store.getters.requestId;
    }
  }
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
.btn-primary:disabled {
  opacity: 0.6;
}
.main-container {
  overflow-x: hidden;
}
.success-toast {
  position: fixed;
  bottom: 0;
  width: 100%;
  bottom: 30px;
}
.success-toast .msg-container {
  border-radius: 40px;
  padding: 10px 20px;
  color: #fff;
  background: #000;
  width: 50%;
  margin: auto;
  -webkit-transition: opacity 3s ease-in-out;
  -moz-transition: opacity 3s ease-in-out;
  -ms-transition: opacity 3s ease-in-out;
  -o-transition: opacity 3s ease-in-out;
  opacity: 0.7;
}
@media (max-width: 280px) {
}
@media (min-width: 576px) {
}
@media (max-width: 479px) {
}

.location-icon-rotate {
  transform: rotate(136deg);
}
#origin-input-container {
  padding: 0 16px;
  width: 100%;
  left: 0px !important;
}
.map-input-container-top {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.map-input-container-bottom {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
#origin-input,
#destination-input {
  background-color: #fff;
  font-family: "Roboto Condensed";
  font-size: 15px;
  font-weight: 300;
  text-overflow: ellipsis;
  width: 100%;
  padding-right: 8px;
}
#searchingModal .search {
  width: auto;
  margin: 0 auto;
  padding: 24px 8px;
}
#searchingModal .search .fa-spinner {
  color: #d50007;
  margin-bottom: 12px;
  font-size: 24px;
}
.map-input-container .map-input {
  width: 100%;
  margin-right: 16px;
}
.map-input-container .map-input span {
  line-height: 50px;
  font-size: 18px;
}
.map-input-container .map-input .mic {
  margin-right: 8px;
  color: #e4e4e4;
}
.map-input-container .map-input .remove {
  color: #707070;
}
.map-input-container .map-input .remove img {
  height: 14px;
  margin-left: 4px;
}
.map-input-container:first-child .map-input {
  border-bottom: 1px solid #f1f3f8;
}
.hdpi.pac-logo:after {
  display: none;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
.col-xs-12,
.col-sm-12 {
  padding-right: 0px;
  padding-left: 0px;
}
.pac-container {
  height: 100%;
  width: 100% !important;
  left: 0px !important;
  padding: 0px 28px;
  border-top: none;
  font-family: "Roboto Condensed";
  top: 163px !important;
  font-size: 20px !important;
  box-shadow: none;
}
.pac-container .pac-icon {
  margin-right: 16px;
}
.pac-container .pac-item-query,
.pac-container .pac-matched {
  font-weight: 300 !important;
}
.pac-container .pac-item {
  padding: 8px 0;
  border-top: none;
}
#map > div {
  background-color: #ffffff !important;
}
#map1,
#map2,
#map3 {
  height: 120px;
}
a[href^="http://maps.google.com/maps"] {
  display: none !important;
}
a[href^="https://maps.google.com/maps"] {
  display: none !important;
}
.gmnoprint a,
.gmnoprint span,
.gm-style-cc {
  display: none;
}
.gmnoprint div {
  background: none !important;
}
.gm-bundled-control.gm-bundled-control-on-bottom {
  display: none;
}
.map-input-container {
  background-color: #ffffff;
  display: flex;
}
.map-input-container .map-input-icon {
  color: #4a4f64;
  background-color: #ffffff;
  margin: 0 15px;
  line-height: 50px;
}
.map-input-container input {
  flex: 1;
  background-color: #ffffff;
}
.map-input-container input:focus {
  border: none;
}
.dotted-line {
  height: 35px;
  position: absolute;
  width: 1px;
  border: 1px dashed #ffffff;
  z-index: 100;
  margin-top: -14px;
  margin-left: 4px;
  background: linear-gradient(to right, #707070 50%, #707070 0%),
    linear-gradient(#707070 50%, #707070 0%),
    linear-gradient(to right, #707070 50%, rgba(112, 112, 112, 0) 0%),
    linear-gradient(#707070 50%, rgba(112, 112, 112, 0) 0%);
  background-repeat: repeat-x, repeat-y;
  background-size: 1px 0px, 1px 1px;
}
.dotted-line-index {
  height: 38px;
  position: absolute;
  width: 1px;
  border: 1px dashed #ffffff;
  z-index: 100;
  margin-top: -17px;
  margin-left: 19px;
  background: linear-gradient(to right, #707070 50%, #707070 0%),
    linear-gradient(#707070 50%, #707070 0%),
    linear-gradient(to right, #707070 50%, rgba(112, 112, 112, 0) 0%),
    linear-gradient(#707070 50%, rgba(112, 112, 112, 0) 0%);
  background-repeat: repeat-x, repeat-y;
  background-size: 1px 0px, 1px 1px;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(252, 211, 0, 0.7);
  }
  70% {
    -webkit-box-shadow: 0 0 0 46px rgba(252, 211, 0, 0.3);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(252, 211, 0, 0.3);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(252, 211, 0, 0.7);
    box-shadow: 0 0 0 0 rgba(252, 211, 0, 0.7);
  }
  70% {
    -moz-box-shadow: 0 0 0 46px rgba(252, 211, 0, 0.3);
    box-shadow: 0 0 0 46px rgba(252, 211, 0, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(252, 211, 0, 0.3);
    box-shadow: 0 0 0 0 rgba(252, 211, 0, 0);
  }
}
@-webkit-keyframes slide_up_ride {
  0% {
    top: auto;
  }
  25% {
    top: 250px;
  }
}
@keyframes slide_up_ride {
  0% {
    top: auto;
  }
  25% {
    top: 250px;
  }
}
@media all and (orientation: landscape) and (max-height: 616px) {
  .slide-up {
    display: none !important;
  }
}
@media all and (max-height: 712px) {
  .tapped-car-info.request .addresses-container,
  .tapped-car-info.request .all-trip-fares,
  .request-ride-info .addresses-container,
  .request-ride-info .notification-container {
    display: none !important;
  }
}
</style>
