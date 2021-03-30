<template>
  <section class="min-vh-100 position-relative bg-white">
    <svg
      class="floating-shape top-0 right-0 position-fixed"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="181"
      height="76.649"
      viewBox="0 0 181 76.649"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="1"
          x2="0.287"
          y2="1.279"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#ff6f41"></stop>
          <stop offset="1" stop-color="#fc3997"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          y1="0.065"
          x2="0.5"
          y2="1"
          xlink:href="#linear-gradient"
        ></linearGradient>
      </defs>
      <g
        id="Group_2831"
        data-name="Group 2831"
        transform="translate(-575 -3003)"
      >
        <path
          id="Intersection_14"
          data-name="Intersection 14"
          d="M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z"
          transform="translate(575 3003)"
          opacity="0.2"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Intersection_13"
          data-name="Intersection 13"
          d="M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z"
          transform="translate(606.995 3003)"
          opacity="0.2"
          fill="url(#linear-gradient-2)"
        ></path>
      </g>
    </svg>
    <div class="container-fluid min-vh-100">
      <div class="row min-vh-100 justify-content-center">
        <div class="col-12 my-auto">
          <div class="mb-3 w-100">
            <div class="text-center w-100">
              <img
                src="@/assets/logo.png"
                style="cursor: pointer; width: 75% !important"
                class="img-fluid"
              />
            </div>
            <div class="pt-3">
              <h4 class="text-center font-weight-bold mb-1">
                Welcome to Yego Cabs App
              </h4>
            </div>
            <div class="pt-3 1-100">
              <router-link
                :to="{ name: 'home' }"
                class="btn btn-outline-primary btn-block mb-3 py-3"
                style="background: rgba(39, 43, 65, 0.15); color: #272b41"
                >Get Started Now!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      class="floating-shape bottom-0 position-fixed"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="181"
      height="76.649"
      viewBox="0 0 181 76.649"
      style="transform: rotate(180deg)"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="1"
          x2="0.287"
          y2="1.279"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#ff6f41"></stop>
          <stop offset="1" stop-color="#fc3997"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          y1="0.065"
          x2="0.5"
          y2="1"
          xlink:href="#linear-gradient"
        ></linearGradient>
      </defs>
      <g
        id="Group_2831"
        data-name="Group 2831"
        transform="translate(-575 -3003)"
      >
        <path
          id="Intersection_14"
          data-name="Intersection 14"
          d="M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z"
          transform="translate(575 3003)"
          opacity="0.2"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Intersection_13"
          data-name="Intersection 13"
          d="M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z"
          transform="translate(606.995 3003)"
          opacity="0.2"
          fill="url(#linear-gradient-2)"
        ></path>
      </g>
    </svg>
  </section>
</template>

<script>
export default {
  name: "Landing",
  data: () => ({}),
  created() {
    if (this.userLogged) {
      window.location.href =
        window.location.href.split("#")[0] + "#/driver-account";
    }
  },
  methods: {},
};
</script>
<style scoped lang="css">
.floating-shape.bottom-0 {
  bottom: -1px !important;
}
.shape-container {
  position: relative;
  z-index: 10;
  overflow: hidden;
}
.pb-10,
.py-10 {
  padding-bottom: 7.5rem !important;
}
.pt-10,
.py-10 {
  padding-top: 7.5rem !important;
}
.floating-shape.bottom-0 {
  bottom: -1px !important;
}
.floating-shape {
  position: absolute;
}
@media (max-width: 280px) {
  .landing-btns-container {
    display: block !important;
  }
  .landing-btn {
    width: 100%;
  }
  .landing-btn:last-child {
    margin-top: 1.5rem;
  }
}
</style>
