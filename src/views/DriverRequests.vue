<template>
  <div class="login pages section-padding">
    <bottom-drawer v-if="pendingTrip">
      <img
        slot="overlaycontent"
        :src="`${publicPath}img/loading.gif`"
        class="img-fluid mx-auto"
      />
      <div slot="contents">
        <div>
          <h6>You have a pending Trip</h6>
          <div class="border py-2 px-3">
            <p class="mb-0">Client Name: {{ client.firstname || "N/A" }}</p>
            <p class="mb-0">Client Number: {{ client.phone || "N/A" }}</p>
          </div>
         
            <button
              type="button"
              class="btn btn-primary mt-2"
              @click="closeTrip"
            >
              <img
                :src="`${publicPath}img/verified.svg`"
                class="img-fluid"
                style="width: 20px"
              />
              Complete Trip
            </button>
        </div>
      </div>
    </bottom-drawer>
      <wolf-alert
      :modalTitle="alertDefaults.title"
      :modalContent="alertDefaults.content"
      :actionButton="alertDefaults.actionButton"
      @accept-alert="handleAcceptedRequest"
      @close="closeAlert"
      :actionButtonClasses="alertDefaults.classes"
      v-if="alertDefaults.modalOpen"
    />
    <div id="googlemaps" />
    <div class="change-request-status">
      <label class="switch float-left">
        <input
          v-model="driverOnline"
          type="checkbox"
        >
        <span class="slider" />
      </label>
      
      <div class="clearfix" />

      <div
        v-if="false"
        class="request-notification-container map-notification offline-notification map-notification-warning"
      >
        You are offline!
        <div class="font-weight-light">
          Go online to accept jobs!
        </div>
      </div>

      <div class="min-h-100 position-relative">
        <div style="display: grid;height: 100%;min-height: 100%;justify-content: center;padding-top: 45%;">
          <a
        href="javascript:void(0)"
        class="href-decoration-none notification-request"
      >
        <div class="request-notification-container">
          <span class="num">{{ requests.length }}</span> New Requests!
          <div class="font-weight-light">Please accept or decline request</div>
        </div>
      </a>
       <div class="go-to-pickup-btn">
      <button
        type="button"
        class="btn btn-primary text-uppercase text-white"
        @click="toggleModal"
      >
        Your Requests
      </button>
        </div>
      </div>
    </div>
      <!--Link Notification Container End-->
    </div>
    <wolf-modal
        v-if="modalOpen"
        @close="toggleModal"
        style="display: block"
        :modalSize="'default'"
        :headerColor="'#c92f4e'"
        :need-footer="false"
      >
        <span slot="head" style="padding-top: 10px">Your Pending Requests</span>
        <div slot="body">
        <div
          v-for="(request, index) in requests"
          :key="'request'+index"
        >
          <div class="media align-items-center">
            <img
              :src="`${publicPath}img/avatar.png`"
              class="img-thumbnail rounded-circle mr-3"
              style="width:35px; height:35px;"
            >
            <div class="media-body">
              <h6 class="mb-0">
                {{ request.firstname }} {{ request.lastname }}
              </h6>
              <div class="addresses-container position-relative">
                <div class="height-auto">
                  <div class="w-100 map-input-container map-input-container-top align-items-center">
                    <span class="fas fa-location-arrow location-icon-rotate map-input-icon" />
                    <div class="mr-0 display-flex">
                      <span>{{ request.pick_up_location }}</span>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="href-decoration-none"
                  >
                    <div
                      class="w-100 map-input-container map-input-container-bottom align-items-center"
                    >
                      <span class="map-input-icon">
                        <img
                          :src="`${publicPath}img/circle.svg`"
                          style="margin-top:0px"
                        >
                      </span>
                      <div
                        class="map-input mr-0 display-flex border-0 controls flex-1 font-weight-normal"
                        style="height: 17px;"
                      >{{ request.drop_off_location }}</div>
                      <span
                        class="dotted-line"
                        style="height: 24px;left:14px"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="request-btn-container d-flex pb-3 mb-2 border-bottom">
            <div class="request-btn mr-3">
              <button
                type="button"
                class="btn btn-transparent-primary decline"
                style="height: auto; line-height: 20px;"
                @click="handleAlertAction(request, 'denied')"
              >
                Decline
              </button>
            </div>
            <div class="request-btn">
              <a
                href="javascript:void(0)"
                class="btn btn-primary w-100 font-weight-light"
                style="height: auto; line-height: 20px;"
                @click="handleAlertAction(request)"
              >Accept</a>
            </div>
          </div>
        </div>
      </div>
    </wolf-modal>
  </div>
</template>

<script>
/* global google */
//import { loadedGoogleMapsAPI } from "@/_helpers/assets-loader.js";
export default {
  name: "DriverRequests",
  data: () => ({
    requests: [],
    viewMode: {
      goPickUp: false,
      dropOff: false,
      tripComplete: false,
      cancelTrip: false,
      neutralMode: true
    },
    driverOnline: false,
    position: [],
    requestId: null,
    flag: null,
    pendingTrip: false,
    client:{
      firstname: null,
      lastname: null, 
      phone: null
    }
  }),
  created() {
    this.getRequests();
  },
  mounted() {
    this.toggleModal();
    /*this.$store.state.isLoading = true;
    loadedGoogleMapsAPI.then(() => {
      this.$nextTick(() => {
      let axios = this.axios;
      delete axios.defaults.headers.common['Authorization'];
        axios({
          url: "http://ip-api.com/json/",
          method: "GET",
          headers: { "Content-Type": null }
        }).then(response => {
          this.position[0] = response.data.lat;
          this.position[1] = response.data.lon;
          google.maps.event.addDomListener(
            window,
            "load",
            this.showGoogleMaps()
          );
        });
        this.$store.state.isLoading = false;
      });
    }); */
  },
  methods: {
    closeTrip(){
      this.pendingTrip = false
    },
    getRequests() {
      this.$store
        .dispatch("getRequest", "driver_requests")
        .then(response => {
          this.requests = response.data.requests;
        });
    },
    handleViewMode(givenView) {
      this.falseObject(this.viewMode, givenView);
    },
    handleAlertAction(request, flag="accepted"){
      this.alertDefaults = {
          title: "Request Denied",
          content:
            "Are you sure you to change status of this request to: " +flag+"?",
          actionType: "close_alert",
          actionButton: "Yes",
          classes: "btn btn-danger",
          modalOpen: true,
      };
        this.requestId = request.id;
        this.flag = flag;
        this.client = {
          firstname: request.firstname,
          lastname: request.lastname,
          phone: request.phone,
        }
    },
    handleAcceptedRequest() {
      var formData = this.formData({ requestId: this.requestId, flag: this.flag });
      let url = "set_passenger_pickup";
      let DispatchpParams = { formData: formData, url: url };
      this.$store
        .dispatch("postRequest", DispatchpParams)
        .then(response => {
          if (!response.data.error) {
            this.getRequests();
            this.clearObject(this.alertDefaults);
            if(this.flag=="accepted"){
              this.pendingTrip = true
            }
          }
        });
    },
    showGoogleMaps() {
      var latLng = new google.maps.LatLng(this.position[0], this.position[1]);
      var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
      };

      let map = new google.maps.Map(
        document.getElementById("googlemaps"),
        mapOptions
      );

      // Show the default red marker at the location

      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
      marker.setVisible(true);
    }
  }
};
</script>
<style lang="css">
.request-ride-btn,
.go-to-pickup-btn {
  bottom: 12px !important;
}
#googlemaps {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; /* Set z-index to 0 as it will be on a layer below the contact form */
}

#contactform {
  position: relative;
  z-index: 1; /* The z-index should be higher than Google Maps */
  width: 300px;
  margin: 60px auto 0;
  padding: 10px;
  background: black;
  height: auto;
  opacity: 0.45; /* Set the opacity for a slightly transparent Google Form */
  color: white;
}
.modal-body{
  background: #fff!important;
}
</style>