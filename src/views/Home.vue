<template>
  <div class="min-vh-100 position-relative">
    <router-link
      :to="{ name: 'landing' }"
      class="btn bg-white rounded-circle"
      style="
        width: 35px;
        height: 35px;
        line-height: 35px;
        padding: unset;
        position: fixed;
        top: 12px;
        left: 17px;
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
    </router-link>
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
    <bottom-drawer
      v-if="$store.state.drawerBottomOpen && drawerMode.register"
      @close="tunDrawerOff"
    >
      <div slot="contents">
        <h4 class="text-primary">What Account would you like?</h4>
        <div class="pt-2">
          <div
            class="media align-items-center"
            @click="goAccountCreation('signup', 'Passenger')"
          >
            <img
              :src="`${publicPath}img/avatar.png`"
              class="img-thumbnail rounded-circle mr-3"
              style="width: 35px; height: 35px"
            />
            <div class="media-body">
              <h6 class="mb-0">Passenger Account</h6>
              <p>
                Use this app for requesting a ride and managing your recent
                trips
              </p>
            </div>
          </div>
          <hr />
          <div
            class="media align-items-center"
            @click="goAccountCreation('signup')"
          >
            <img
              :src="`${publicPath}img/taxi.png`"
              class="img-thumbnail rounded-circle mr-3"
              style="width: 35px; height: 35px"
            />
            <div class="media-body">
              <h6 class="mb-0">Driver Account</h6>
              <p>Make money using this app by accepting passengers requests</p>
            </div>
          </div>
        </div>
      </div>
    </bottom-drawer>
    <bottom-drawer
      v-if="$store.state.drawerBottomOpen && drawerMode.login"
      @close="tunDrawerOff"
    >
      <div slot="contents">
        <h4 class="text-primary">What Account do you have?</h4>
        <div class="pt-2">
          <div
            class="media align-items-center"
            @click="goAccountCreation('login', 'Passenger')"
          >
            <img
              :src="`${publicPath}img/avatar.png`"
              class="img-thumbnail rounded-circle mr-3"
              style="width: 35px; height: 35px"
            />
            <div class="media-body">
              <h6 class="mb-0">Passenger Account</h6>
              <p>Customers account to book cabs</p>
            </div>
          </div>
          <hr />
          <div
            class="media align-items-center"
            @click="goAccountCreation('login')"
          >
            <img
              :src="`${publicPath}img/taxi.png`"
              class="img-thumbnail rounded-circle mr-3"
              style="width: 35px; height: 35px"
            />
            <div class="media-body">
              <h6 class="mb-0">Driver Account</h6>
              <p>Drivers account to accept requests</p>
            </div>
          </div>
        </div>
      </div>
    </bottom-drawer>
    <div class="container-fluid min-vh-100">
      <div class="row min-vh-100 justify-content-center">
        <div class="col-12 my-auto">
          <div class="text-center my-2">
            <img :src="`${publicPath}img/logo.png`" alt="Main Logo" />
            <div class="py-1">
              <h3 class="text-dark mb-0">You're almost there!</h3>
            </div>
            <h6 class="text-primary text-centrer">New around here?</h6>
            
            <button
              type="button"
              class="btn btn-primary text-white w-100 mb-3"
              @click="toggleView('register')"
            >
              Get Stated
            </button>
            <div class="mt-3">
              <h6 class="text-primary text-centrer">
                Already have account here?
              </h6>
              <button
                type="button"
                class="btn btn-primary text-white w-100"
                @click="toggleView('login')"
              >
                Log into your account
              </button>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    currentUser: {},
    drawerMode: {
      login: false,
      register: false,
    },
  }),
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.currentUser = JSON.parse(this.$store.getters.user) || {};
      if (!this.isEmpty(this.currentUser)) {
        if (Object.keys(this.currentUser).includes("personal_id"))
          this.$router.replace({ name: "driverrequests" });
        else this.$router.replace({ name: "dashboard" });
      }
    }
  },
  methods: {
    goAccountCreation(routerName, accountType = "driver") {
      this.$router.push({ name: routerName, query:{accountType: accountType} });
    },
    toggleView(activeView) {
      this.$store.state.drawerBottomOpen = true;
      this.falseObject(this.drawerMode, activeView);
    },
    tunDrawerOff() {
      this.$store.state.drawerBottomOpen = false;
    },
  },
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
