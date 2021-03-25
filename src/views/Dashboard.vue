<template>
  <div style="position:relative">
    <div id="map" style="height:93vh" />
    <bottom-drawer v-if="$store.state.drawerBottomOpen && !whereToLocation">
      <div slot="contents">
        <p class="mb-0 text-muted">
          Nice to see you!
        </p>
        <h6 class="text-primary">
          Where are you going?
        </h6>
        <div class="form-group" style="padding: 10px 0px;">
          <div class="input-group" style="position:relative">
            <div
              class="input-group-prepend"
              style="position:absolute; top: 28%; left: 5px"
            >
              <span>
                <img src="@/assets/icons/marker.svg" />
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
              <div class="label-title">
                Searching Driver...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        id="origin-input-container"
        class="height-auto"
        :class="{ hidden: !whereToLocation }"
        style="position: absolute; top: 10px!important"
      >
        <div class="w-100 map-input-container map-input-container-top">
          <span class="map-input-icon">
            <img
              :src="`${publicPath}img/place_mark.png`"
              style="width: 17px;"
            />
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
              <img src="@/assets/icons/cross-light.svg" />
            </span>
          </div>
        </div>
        <div class="w-100 map-input-container map-input-container-bottom">
          <span class="map-input-icon">
            <img src="@/assets/icons/circle.svg" />
          </span>
          <div class="map-input d-flex">
            <input
              id="pac-input-to"
              class="controls flex-1 form-control"
              type="text"
              placeholder="Enter a destination location"
            />

            <span class="remove" @click="cleanLocations('destination')">
              <img src="@/assets/icons/cross-light.svg" />
            </span>
          </div>
          <span class="dotted-line-index" />
        </div>
      </div>
    </div>

    <div class="not-map" style="position:relative">
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
                src="@/assets/icons/verified.svg"
                class="img-fluid mr-2"
                style="width:20px;"
              />

              <div class="media-body">
                <span class="payment-options-more">Confirm Pickup</span>
                <p>Confirm and search for drivers</p>
              </div>
            </div>
            <div class="default-payment-method-container display-flex">
              <div class>
                <img src="@/assets/icons/audii.png" class="mx-auto" />
              </div>
            </div>
          </div>
          <div class="addresses-container position-relative">
            <div class="height-auto">
              <div class="w-100 map-input-container map-input-container-top">
                <span class="map-input-icon">
                  <img
                    :src="`${publicPath}img/place_mark.png`"
                    style="width: 17px;"
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
                    <img src="@/assets/icons/circle.svg" />
                  </span>
                  <div
                    class="map-input mr-0 display-flex border-0 controls flex-1 font-weight-normal align-items-center"
                  >
                    {{ newRequest.location_to }}
                  </div>
                  <span class="dotted-line" style="margin-left: 19px;" />
                </div>
              </a>
            </div>
          </div>
          <hr />
          <div class="confirm-ride-btn">
            <button
              type="button"
              class="btn btn-transparent-primary text-white"
              @click="handleRequestConfirmation()"
            >
              Confirm Trip
            </button>
          </div>
        </template>
      </bottom-drawer>

      <div v-if="viewMode.wishContainer" class="wish-container">
        <div class="close-wish">
          <span class="float-right" @click="handleViewMode('rideOptions')">
            <img src="@/assets/icons/close.svg" />
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
          style="position:unset!important"
          @click="handleViewMode('rideOptions')"
        >
          <button type="button" class="btn btn-primary text-white">
            Save Notes
          </button>
        </div>
      </div>

      <bottom-drawer
        v-if="viewMode.requestConfirmed"
        @close="viewMode.requestConfirmed = false"
      >
        <div slot="contents">
          <div class="tapped-car-container">
            <h5 class="font-weight-bold text-center mb-1">
              Choose your driver
            </h5>
            <hr />
            <div
              v-for="(driver, i) in drivers"
              :key="'driver' + i"
              class="tapped-car-info-container mb-2"
              style="padding: 8px 16px 0 0px;"
            >
              <div class="d-flex align-items-center">
                <div class="col-10">
                  <span class="d-block font-weight-bold"
                    >{{ driver.firstname }} {{ driver.lastname }}</span
                  >
                  <span v-if="false" class="d-block">Male, 32 years Old</span>
                  <div class="float-left font-weight-light">
                    <div class="text-primary">
                      {{ driver.plate_number }}
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <img src="@/assets/avatar.svg" style="width:50px" />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <img
                  v-if="driver.car_image"
                  :src="fileURL + 'uploads/' + driver.car_image"
                  class="img-responsive"
                  style="width:60px"
                />
                <img
                  v-else
                  src="@/assets/icons/mer.png"
                  class="img-responsive"
                  style="width:60px"
                />
                <div class="requested-car-info col-7">
                  <div class="text-center">
                    {{ driver.car_make }}, {{ driver.car_model }}
                  </div>
                </div>
                <div class="request-btn">
                  <button
                    type="button"
                    class="btn btn-transparent-primary"
                    style="height: auto; line-height: 20px;"
                    @click="setRequest(driver.id)"
                  >
                    Request
                  </button>
                </div>
              </div>
              <div class="clearfix" />
              <hr />
            </div>
          </div>
        </div>
      </bottom-drawer>
      <bottom-drawer
        v-if="viewMode.driverReply"
        @close="viewMode.driverReply = false"
      >
        <img
          slot="overlaycontent"
          src="@/assets/loading.gif"
          class="img-fluid mx-auto"
        />
        <div slot="contents">
          <div class="text-center w-100">
            <h5 class="font-weight-bold text-primary">
              Waiting for driver's reply...
            </h5>
            <hr />
            <div class="d-flex">
              <div
                class="bg-white img-thumbnail rounded-circle mx-auto"
                style="padding:6px; width:45px; height:45px;"
              >
                <img src="@/assets/icons/close.svg" class="img-fluid" alt />
              </div>
            </div>
            <p style="color:#000!important" class="mt-2">
              Cancel this ride
            </p>
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
      neutralMode: true
    },
    newRequest: {
      location_from: null,
      location_to: null,
      customer_notes: null
    },
    drivers: [],
    whereToLocation: null
  }),
  created() {
    this.$store.state.drawerBottomOpen = true;
    this.$store.state.needHeader = false;
    /*if (this.$store.getters.currentRequest) {
      if (
        Object.keys(JSON.parse(this.$store.getters.currentRequest)).includes(
          "driver_id"
        )
      ) {
        this.falseObject(this.viewMode, "driverReply");
      } else {
        this.$store.state.drawerBottomOpen = false;
        this.getCurrentDrivers();
      }
    } */
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
      this.axios({
        url: "http://ip-api.com/json/",
        method: "GET",
        headers: { "Content-Type": null }
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
        zoom: 13
      });

      let infowindow = new google.maps.InfoWindow();
      let marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      var card = document.getElementById("origin-input-container");
      var input = document.getElementById("pac-input-from");
      var input2 = document.getElementById("pac-input-to");
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
      var autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        componentRestrictions: { country: "rw" }
      });
      var autocomplete2 = new google.maps.places.Autocomplete(input2, {
        types: ["geocode"],
        componentRestrictions: { country: "rw" }
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
        headers: { "Content-Type": null }
      }).then(response => {
        map.setZoom(15);
        marker = new google.maps.Marker({
          position: latlng,
          map: map
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
    setRequest(driver_id) {
      let newRequest = JSON.parse(this.$store.getters.currentRequest);
      newRequest.driver_id = driver_id;
      let formData = this.formData(newRequest);
      let url = "customer/set-request";
      let DispatchpParams = { formData: formData, url: url };
      this.$store
        .dispatch("dukaPostRequest", DispatchpParams)
        .then(response => {
          if (!response.data.error) {
            newRequest.request_id = response.data.request_id;
            this.handleRequestConfirmation(newRequest);
            this.falseObject(this.viewMode, "driverReply");
          }
        });
    },
    handleRequestConfirmation(givenRequest = null) {
      this.$store
        .dispatch("handleNewRequest", givenRequest || this.newRequest)
        .then(() => {
          if (!givenRequest) {
            this.getCurrentDrivers();
          }
        });
    },
    getCurrentDrivers() {
      this.$store
        .dispatch("dukaGetRequest", "customer/get-active-drivers")
        .then(response => {
          this.drivers = response.data.drivers;
          this.handleViewMode("requestConfirmed");
        });
    },
    setWhereToAddress() {
      if (
        this.whereToLocation.trim() !== "" &&
        this.whereToLocation !== null &&
        this.whereToLocation.trim().length > 1
      ) {
        var input = document.getElementById("pac-input-to");
        this.setCaretPosition(input, input.value.length);
      }
    }
  }
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
