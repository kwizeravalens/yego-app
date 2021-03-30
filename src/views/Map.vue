<template>
  <div id="mapArea"></div>
</template>
<script>
/* global google  */
import { loadedGoogleMapsAPI } from "@/_helpers/assets-loader.js";
export default {
  name: "Map",
  data: () => ({
    garages: [],
  }),
  created() {
    document.body.classList.remove("modal-open");
    let coords = !this.isEmpty(this.$store.state.coords)
      ? this.$store.state.coords
      : { lat: -1.9562495999999998, long: 30.1006848 };
    this.$store
      .dispatch("postRequest", {
        url: "garages",
        formData: this.formData(coords),
      })
      .then((response) => {
        this.garages = response.data.garages;
      });
  },
  methods: {
    initMap() {
      let coords = !this.isEmpty(this.$store.state.coords)
        ? this.$store.state.coords
        : { lat: -1.9562495999999998, long: 30.1006848 };
      const map = new google.maps.Map(document.getElementById("mapArea"), {
        center: {
          lat: parseFloat(coords.lat),
          lng: parseFloat(coords.long),
        },
        zoom: 13,
        mapTypeId: "roadmap",
      });
      for (let i = 0; i < this.garages.length; i++) {
        const infoWindow = new google.maps.InfoWindow();
        var point = new google.maps.LatLng(
          parseFloat(this.garages[i].latitude),
          parseFloat(this.garages[i].longitude)
        );
        const infowincontent = document.createElement("div");
        var strong = document.createElement("strong");
        strong.textContent = this.garages[i].garage_name;
        infowincontent.appendChild(strong);
        var icon = { label: "G" };
        infoWindow.setContent(infowincontent);
        const marker = new google.maps.Marker({
          map: map,
          position: point,
          label: icon.label,
        });
        marker.addListener("click", function () {
          infoWindow.open(map, marker);
        });
      }
    },
  },
  mounted() {
    loadedGoogleMapsAPI.then(() => {
      this.initMap();
    });
  },
};
</script>
<style lang="css">
#mapArea {
  height: 100vh;
  width: 100%;
}
</style>
