<template>
  <div style="position: relative">
     <wolf-alert
      :modalTitle="alertDefaults.title"
      :modalContent="alertDefaults.content"
      :actionButton="alertDefaults.actionButton"
      @accept-alert="handleAlertAction"
      @close="closeAlert"
      :actionButtonClasses="alertDefaults.classes"
      v-if="alertDefaults.modalOpen"
    />
    <div id="map" style="height: 93vh" />
    <bottom-drawer v-if="$store.state.drawerBottomOpen && whereToLocation.trim().length < 2">
      <div slot="contents">
        <p class="mb-0 text-muted">Nice to see you!</p>
        <h6 class="text-primary">Where are you going?</h6>
        <div class="form-group" style="padding: 10px 0px">
          <div class="input-group" style="position: relative">
            <div
              class="input-group-prepend"
              style="position: absolute; top: 28%; left: 5px"
            >
              <span>
                <img :src="`${publicPath}img/marker.svg`" />
              </span>
            </div>
            <input
              id="whereTo"
              v-model="whereToLocation"
              class="form-control pl-4"
              type="text"
              autocomplete="off"
              name="whereTo"
              placeholder="Search for destination"
              @keyup="setWhereToAddress"
            />
          </div>
        </div>
      </div>
    </bottom-drawer>

    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content search">
          <div class="modal-body">
            <div class="text-center">
              <span class="fas fa-spinner fa-spin" />
              <div class="label-title">Searching Driver...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        id="origin-input-container"
        class="height-auto"
        :class="{ hidden: whereToLocation.trim().length < 2 }"
        style="position: absolute; top: 10px !important"
      >
        <div class="w-100 map-input-container map-input-container-top">
          <span class="map-input-icon">
            <img :src="`${publicPath}img/place_mark.png`" style="width: 17px" />
          </span>
          <div class="map-input d-flex">
            <input
              id="pac-input-from"
              class="controls flex-1 form-control"
              type="text"
              placeholder="Enter an origin location"
              @focusout="toggleRideOptions"
            />

            <span class="remove" @click="cleanLocations('source')">
              <img :src="`${publicPath}img/cross-light.svg`" />
            </span>
          </div>
        </div>
        <div class="w-100 map-input-container map-input-container-bottom">
          <span class="map-input-icon">
            <img :src="`${publicPath}img/circle.svg`" />
          </span>
          <div class="map-input d-flex">
            <input
              id="pac-input-to"
              class="controls flex-1 form-control"
              type="text"
              placeholder="Enter a destination location"
            />

            <span class="remove" @click="cleanLocations('destination')">
              <img :src="`${publicPath}img/cross-light.svg`" />
            </span>
          </div>
          <span class="dotted-line-index" />
        </div>
      </div>
    </div>

    <div class="not-map" style="position: relative">
      <!--Request Ride Button Container Start-->
      <div v-if="viewMode.requestRide" class="request-ride-btn">
        <button
          type="button"
          class="btn btn-primary"
          @click="handleViewMode('rideOptions')"
        >
          Request a Ride
        </button>
      </div>
      <!--Request Ride Button Container End-->

      <!--Choose a Car Container Start-->
      <bottom-drawer
        v-if="viewMode.rideOptions"
        @close="viewMode.rideOptions = false"
      >
        <template slot="contents">
          <div class="payment-options d-flex align-items-center">
            <div class="media align-items-center col-10">
              <img
                :src="`${publicPath}img/verified.svg`"
                class="img-fluid mr-2"
                style="width: 20px"
              />

              <div class="media-body">
                <span class="payment-options-more">Confirm Pickup</span>
                <p>Confirm and search for drivers</p>
              </div>
            </div>
            <div class="default-payment-method-container display-flex">
              <div class>
                <img :src="`${publicPath}img/taxi.png`" class="mx-auto" />
              </div>
            </div>
          </div>
          <div class="addresses-container position-relative">
            <div class="height-auto">
              <div class="w-100 map-input-container map-input-container-top">
                <span class="map-input-icon">
                  <img
                    :src="`${publicPath}img/place_mark.png`"
                    style="width: 17px"
                  />
                </span>
                <div class="map-input mr-0 display-flex">
                  <input
                    class="controls flex-1 font-weight-light"
                    type="text"
                    :value="newRequest.location_from"
                    disabled
                  />
                </div>
              </div>
              <a href="javascript:void(0)" class="href-decoration-none">
                <div
                  class="w-100 map-input-container map-input-container-bottom"
                >
                  <span class="map-input-icon">
                    <img :src="`${publicPath}img/circle.svg`" />
                  </span>
                  <div
                    class="map-input mr-0 display-flex border-0 controls flex-1 font-weight-normal align-items-center"
                  >
                    {{ newRequest.location_to }}
                  </div>
                  <span class="dotted-line" style="margin-left: 19px" />
                </div>
              </a>
            </div>
          </div>
          <hr />
          <div class="confirm-ride-btn">
            <button
              type="button"
              class="btn btn-primary text-white"
              @click="getCurrentDrivers"
            >
              Confirm Trip
            </button>
          </div>
        </template>
      </bottom-drawer>

      <div v-if="viewMode.wishContainer" class="wish-container">
        <div class="close-wish">
          <span class="float-right" @click="handleViewMode('rideOptions')">
            <img :src="`${publicPath}img/icons_delete.png`" />
          </span>
          <span class="clearfix" />
        </div>
        <div class="enter-wish">
          <textarea
            v-model="newRequest.customer_notes"
            class="width-100 height-100 font-weight-light"
            placeholder="Please enter your wishes here..."
          />
        </div>
        <div
          class="send-wish-btn"
          style="position: unset !important"
          @click="handleViewMode('rideOptions')"
        >
          <button type="button" class="btn btn-primary text-white">
            Save Notes
          </button>
        </div>
      </div>
      <wolf-modal
        v-if="viewMode.requestConfirmed"
        @close="
          viewMode.requestConfirmed = false;
          toggleModal();
        "
        style="display: block"
        :modalSize="'default'"
        :headerColor="'#c92f4e'"
        :need-footer="false"
      >
        <span slot="head" style="padding-top: 10px">Select a driver</span>
        <div slot="body">
          <div class="tapped-car-container">
            <div
              v-for="(driver, i) in drivers"
              :key="'driver' + i"
              class="tapped-car-info-container mb-2"
              style="padding: 8px 16px 0 0px"
            >
              <div class="d-flex align-items-center">
                <div class="col-10">
                  <span class="d-block font-weight-bold"
                    >{{ driver.firstname }} {{ driver.lastname }}</span
                  >
                  <div class="float-left font-weight-light">
                    <div class="text-primary">
                      {{ driver.plate_number }}
                    </div>
                  </div>
                </div>
                <div class="col-2 mx-auto">
                  <img :src="`${publicPath}img/avatar.png`" style="width: 27px" />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <img
                  :src="`${publicPath}img/taxi.png`"
                  class="img-responsive"
                />
                <div class="requested-car-info col-7">
                  <div class="text-center">
                    {{ driver.car_make }}, {{ driver.car_model }}
                  </div>
                </div>
                <div class="request-btn col-2 mx-auto">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="
                      height: auto;
                      line-height: 13px;
                      max-width: 100px;
                      padding: 2px 5px;
                      font-size: 14px;
                    "
                    @click="chooseDriver(driver)"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div class="clearfix" />
              <hr />
            </div>
          </div>
        </div>
      </wolf-modal>

      <bottom-drawer
        v-if="viewMode.driverReply"
        @close="viewMode.driverReply = false"
      >
        <img
          slot="overlaycontent"
          :src="`${publicPath}img/loading.gif`"
          class="img-fluid mx-auto"
        />
        <div slot="contents">
          <div class="text-center w-100">
            <div class="d-flex">
              <div
                class="bg-white img-thumbnail rounded-circle mx-auto"
                style="padding: 6px; width: 45px; height: 45px"
              >
                <img :src="`${publicPath}img/icons_delete.png`" class="img-fluid" alt />
              </div>
            </div>
            <p style="color: #000 !important" class="mt-2">Cancel this ride</p>
          </div>
        </div>
      </bottom-drawer>
    </div>
  </div>
</template>

<script>
/* global google */
import { loadedGoogleMapsAPI } from "@/_helpers/assets-loader.js";
export default {
  name: "Dashboard",
  data: () => ({
    viewMode: {
      requestRide: false,
      rideOptions: false,
      wishContainer: false,
      requestConfirmed: false,
      driverReply: false,
      neutralMode: true,
    },
    newRequest: {
      location_from: null,
      location_to: null,
      customer_notes: null,
    },
    drivers: [],
    whereToLocation: "",
    fetchInterval: null,
    resolved: false,
    directId: null,
    choosenDriverId: null
  }),
   computed: {
    requestId: function () {
      return this.$store.getters.requestId;
    },
  },
  created() {
    this.$store.state.drawerBottomOpen = true;
    this.$store.state.needHeader = false;
     if (this.requestId) {
      this.fetchRequestState();
    }
  },
  mounted() {
    this.$store.state.isLoading = true;
    loadedGoogleMapsAPI.then(() => {
      this.$nextTick(() => {
        this.initGoogleMap();
        this.$store.state.isLoading = false;
      });
    });
  },
  methods: {
    cleanLocations(inputFlag) {
      let inputId =
        inputFlag === "destination" ? "pac-input-to" : "pac-input-from";
      document.getElementById(inputId).value = null;
      this.toggleRideOptions();
    },
    initGoogleMap() {
      let axios = this.axios;
      delete axios.defaults.headers.common['Authorization'];
      axios({
        url: "http://ip-api.com/json/",
        method: "GET",
        headers: { "Content-Type": null },
      }).then(() => {
        this.GetCoords(
          this.$store.state.coords.lat,
          this.$store.state.coords.long
        );
      });
    },
    GetCoords(lat, lon) {
      let latlng = new google.maps.LatLng(lat, lon);
      let map = new google.maps.Map(document.getElementById("map"), {
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoom: 13,
      });

      let infowindow = new google.maps.InfoWindow();
      let marker = new google.maps.Marker({
        position: latlng,
        map: map,
      });
      var card = document.getElementById("origin-input-container");
      var input = document.getElementById("pac-input-from");
      var input2 = document.getElementById("pac-input-to");
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
      var autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        componentRestrictions: { country: "rw" },
      });
      var autocomplete2 = new google.maps.places.Autocomplete(input2, {
        types: ["geocode"],
        componentRestrictions: { country: "rw" },
      });

      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo("bounds", map);
      autocomplete2.bindTo("bounds", map);
      autocomplete2.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete2.getPlace();
        if (!place.geometry) {
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(15); // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindow.open(map, marker);
        this.toggleRideOptions();
      });

      let currentLatLon = lat + "," + lon;
      this.axios({
        url:
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          currentLatLon +
          "&key=AIzaSyCsv-5eNr-tKaYfATuPRvQy914TNr880Gw",
        method: "GET",
        headers: { "Content-Type": null },
      }).then((response) => {
        map.setZoom(15);
        marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });
        infowindow.setContent(response.data.results[0].formatted_address);
        input.value = response.data.results[0].formatted_address;
        infowindow.open(map, marker);
      });

      /*geocoder.geocode({ latLng: latlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            map.setZoom(15);
            marker = new google.maps.Marker({
              position: latlng,
              map: map
            });
            infowindow.setContent(results[1].formatted_address);
            input.value = results[1].formatted_address;
            infowindow.open(map, marker);
          }
        }
      }); */
    },
    handleViewMode(givenView) {
      this.falseObject(this.viewMode, givenView);
    },
    toggleRideOptions() {
      var input = document.getElementById("pac-input-from");
      var input2 = document.getElementById("pac-input-to");
      if (input.value && input2.value) {
        this.newRequest.location_from = input.value;
        this.newRequest.location_to = input2.value;
        this.handleViewMode("rideOptions");
      } else this.handleViewMode("neutralMode");
    },
    fetchRequestState() {
      this.fetchInterval = setInterval(() => {
        let requestId = this.requestId || this.directId;
        if (!requestId) {
          clearInterval(this.fetchInterval);
        }
        this.$store.state.activeBtn = "Fetching";
        this.$store
          .dispatch("postRequest", {
            url: "get_request_state",
            formData: this.formData({ requestId: requestId }),
          })
          .then((response) => {
            if (
              response.data.requestInfo.accepted == 1 &&
              response.data.requestInfo.denied == 0
            ) {
              clearInterval(this.fetchInterval);
              this.$store.dispatch("cancelRequest");
              this.resolved = true;
              this.alertDefaults = {
                title: "Request Confirmation",
                content:
                  "Your request has been accepted by the driver. Please wait for the driver to pick you up",
                actionType: "close_alert",
                actionButton: "Okey",
                classes: "btn btn-danger",
                modalOpen: true,
              };
              this.getRequests();
            }
            if (
              response.data.requestInfo.denied == 1 &&
              response.data.requestInfo.accepted == 0
            ) {
              clearInterval(this.fetchInterval);
              this.$store.dispatch("cancelRequest");
              this.resolved = true;
              this.alertDefaults = {
                title: "Request Denied",
                content:
                  "Oops! Your request has been denied by the driver. Please try another driver",
                actionType: "close_alert",
                actionButton: "Okey",
                classes: "btn btn-danger",
                modalOpen: true,
              };
              this.getRequests();
            }
          });
      }, 5000);
    },
    handleAlertAction(){
      if(this.alertDefaults.actionType == "close_alert")
        this.clearObject(this.alertDefaults);
      else 
        this.setRequest();
    },
    chooseDriver(driver){
      this.choosenDriverId = driver.id;
      this.alertDefaults = {
        title: "Confirm a driver",
        content:
          "Are you sure you want to select this driver? - <b>" + driver.firstname +" "+ driver.lastname + "</b>",
        actionType: "set_request",
        actionButton: "Confirm",
        classes: "btn btn-danger",
        modalOpen: true,
      };
    },
    setRequest() {
      clearInterval(this.fetchInterval);
      let newRequest = {
        "pick_up_location" : document.getElementById("pac-input-from").value,
        "drop_off_location" : document.getElementById("pac-input-to").value,
        "requested_driver": this.choosenDriverId
        };
          this.$store
            .dispatch("postRequest", {
              formData: this.formData(newRequest),
              url: "request",
            })
            .then((response) => {
              if (response.data.success) {
                this.toggleModal();
                this.viewMode.requestConfirmed = false;
                this.clearObject(newRequest);
                this.clearObject(this.alertDefaults);
                this.directId = response.data.requestId;
                this.$store.state.driver = response.data.driver;
                this.$store.state.requestId = response.data.requestId;
                this.$store
                  .dispatch("togglePendingRequest", {
                    bool: true,
                    data: response.data,
                  })
                  .then(() => {
                    this.fetchRequestState();
                  });
              }
            });
    },
    getCurrentDrivers() {
      this.$store
        .dispatch("getRequest", "drivers")
        .then((response) => {
          this.drivers = response.data.drivers;
          this.handleViewMode("requestConfirmed");
          this.toggleModal();
        });
    },
    setWhereToAddress() {
      if (this.whereToLocation.trim().length > 1) {
        let input = document.getElementById("pac-input-to");
        input.value = this.whereToLocation;
        input.focus();
        input.scrollIntoView();
      }
    },
  },
};
</script>
<style lang="css">
.landing-input {
  position: absolute;
  bottom: 20px;
  left: auto;
  right: auto;
  margin: 0 auto;
}
#origin-input-container {
  top: 10px !important;
}
</style>
