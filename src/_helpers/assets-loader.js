export const loadedGoogleMapsAPI = new Promise(resolve => {
  window["GoogleMapsInit"] = resolve;
  let GMap = document.createElement("script");
  GMap.setAttribute(
    "src",
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyCsv-5eNr-tKaYfATuPRvQy914TNr880Gw&libraries=places&callback=GoogleMapsInit`
  );
  GMap.setAttribute("id", "googleMapScript");
  let scriptExists = document.getElementById("googleMapScript");
  if (!scriptExists) {
    document.body.appendChild(GMap);
  }
});
