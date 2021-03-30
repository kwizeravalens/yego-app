<template>
  <section class="min-vh-100 position-relative">
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
    <div class="container-fluid min-vh-100">
      <div class="row min-vh-100 justify-content-center">
        <div class="col-12 my-auto">
          <div class="w-100">
            <div class="text-center w-100">
              <img
                src="@/assets/logo.png"
                class="img-fluid"
                style="cursor: pointer; width: 75% !important"
              />
            </div>
            <h5 class="my-2 mt-4 text-center font-weight-bold">Login</h5>
            <form @submit.prevent="logUser" autocomplete="off">
              <div class="alert alert-danger mb-2" v-if="invalidLogin">
                <span>Invalid Password or username</span>
              </div>
              <floating-input
                id="Username"
                type="text"
                label="Your username"
                v-model="credentials.username"
                name="Username"
                validator="required"
              />

              <floating-input
                type="password"
                validator="required"
                name="password"
                label="Your Password"
                id="password"
                v-model="credentials.password"
              />

              <div class="mb-4 text-center">
                <router-link :to="{}">Forgot your password?</router-link>
              </div>
              <div class="form-group">
                <wolf-button
                  load-text=""
                  caption="Login"
                  button-type="submit"
                  @btn-role="logUser"
                  classes="btn btn-block btn-primary"
                  :disabler="!credentials.username || !credentials.password"
                  activator="signing"
                ></wolf-button>
              </div>
              <div class="text-center">
                Don't have a driver account?<router-link
                  :to="{ name: 'signup' }"
                  class="text-primary"
                >
                  Sign up now</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    credentials: {
      username: null,
      password: null,
      accountType: "driver"
    },
    invalidLogin: false,
    loginSucceed: false,
  }),
  created() {},
  mounted(){
    this.credentials.accountType = this.$route.query.accountType;
  },
  methods: {
    logUser: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var formData = this.formData(this.credentials);
          this.$store
            .dispatch("logUser", formData)
            .then((response) => {
              if (response.data.error) {
                this.invalidLogin = true;
                this.loginSucceed = false;
              } else {
                this.invalidLogin = false;
                this.loginSucceed = true;
                if(response.data.user.userType == "driver")
                  this.$router.push({ name: "DriverRequests" });
                else
                  this.$router.push({ name: "map" });
              }
            })
            .catch((err) => console.log(err));
        }
      });
    },
  },
};
</script>
<style scoped lang="css">
@media (max-width: 576px) {
  .form-group {
    margin: 0 0 1.2rem 0 !important;
  }
}
</style>
