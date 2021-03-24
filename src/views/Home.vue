<template>
  <div class="min-vh-100 position-relative bg-white">
    <bottom-drawer
      v-if="$store.state.drawerBottomOpen && drawerMode.register"
      @close="tunDrawerOff"
    >
      <div slot="contents">
        <h4 class="text-primary">
          What Account would you like?
        </h4>
        <div class="pt-2">
          <div
            class="media align-items-center"
            @click="goAccountCreation('register')"
          >
            <img
              src="@/assets/icons/avatar-light.svg"
              class="img-thumbnail rounded-circle mr-3"
              style="width:35px; height:35px;"
            />
            <div class="media-body">
              <h6 class="mb-0">
                Passenger Account
              </h6>
              <p>
                Use this app for requesting a ride and managing your recent
                trips
              </p>
            </div>
          </div>
          <hr />
          <div
            class="media align-items-center"
            @click="goAccountCreation('driverrregister')"
          >
            <img
              src="@/assets/icons/audii.png"
              class="img-thumbnail rounded-circle mr-3"
              style="width:35px; height:35px;"
            />
            <div class="media-body">
              <h6 class="mb-0">
                Driver Account
              </h6>
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
        <h4 class="text-primary">
          What Account do you have?
        </h4>
        <div class="pt-2">
          <div
            class="media align-items-center"
            @click="goAccountCreation('login')"
          >
            <img
              src="@/assets/icons/avatar-light.svg"
              class="img-thumbnail rounded-circle mr-3"
              style="width:35px; height:35px;"
            />
            <div class="media-body">
              <h6 class="mb-0">
                Passenger Account
              </h6>
              <p>Customers account to book cabs</p>
            </div>
          </div>
          <hr />
          <div
            class="media align-items-center"
            @click="goAccountCreation('driverlogin')"
          >
            <img
              src="@/assets/icons/audii.png"
              class="img-thumbnail rounded-circle mr-3"
              style="width:35px; height:35px;"
            />
            <div class="media-body">
              <h6 class="mb-0">
                Driver Account
              </h6>
              <p>Drivers account to accept requests</p>
            </div>
          </div>
        </div>
      </div>
    </bottom-drawer>
    <div
      class="d-flex h-100 justify-content-center align-items-center flex-column mt-5"
    >
      <img src="@/assets/logo.png" alt="Main Logo" />
      <div class="text-center my-2">
        <div class="py-1">
          <h4 class="text-primary">
            You're almost there!
          </h4>
        </div>
        <h6 class="text-primary text-centrer">
          New around here?
        </h6>
        <p>Tell us a more about yourself to start using Yego cabs app</p>
        <button
          type="button"
          class="btn btn-transparent-primary text-white w-100 mb-3"
          @click="toggleView('register')"
        >
          Get Stated
        </button>
        <div>
          <h6 class="text-primary text-centrer">
            Already have account here?
          </h6>
          <p>Log into your account now</p>
          <button
            type="button"
            class="btn btn-transparent-primary text-white w-100"
            @click="toggleView('login')"
          >
            Log into your account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    currentUser: {},
    drawerMode: {
      login: false,
      register: false
    }
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
    goAccountCreation(routerName) {
      this.$router.push({ name: routerName });
    },
    toggleView(activeView) {
      this.$store.state.drawerBottomOpen = true;
      this.falseObject(this.drawerMode, activeView);
    }
  }
};
</script>
