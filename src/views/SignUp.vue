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
        position: absolute;
        top: 12px;
        left: 17px;
        z-index: 9;
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
      <div class="row min-vh-100">
        <div class="col-12 my-auto">
          <div class="w-100">
            <div class="text-center w-100 mt-2">
              <img
                src="@/assets/logo.png"
                style="cursor: pointer; width: 35% !important"
                class="img-fluid"
              />
            </div>
            <h5 class="mt-4 mb-2 text-center font-weight-bold">
              Sign up as a driver
            </h5>
            <form ref="userForm" autocomplete="off" @submit.prevent="signUp">
              <floating-input
                id="full-name"
                name="Full name"
                validator="required"
                type="text"
                v-model="user.fullname"
                label="Your name"
              />
              <floating-input
                id="NationalId"
                v-model="user.national_id"
                name="National ID"
                label="National ID"
                type="number"
                validator="required"
              />
              <floating-input
                id="email"
                type="email"
                validator="required|email"
                name="email"
                v-model="user.email"
                label="Email address"
              />
              <span class="text-danger" v-if="emailError"
                >There is account associated with this email address</span
              >
              <floating-input
                id="Phone"
                v-model="user.phone_number"
                name="Phone Number"
                label="Mobile number"
                type="number"
                validator="required"
              />
              <span class="text-danger" v-if="phoneError"
                >Phone number already in use by a different account</span
              >
              <floating-input
                id="password"
                type="password"
                validator="required"
                name="password"
                label="Password"
                v-model="user.password"
              />
              <div class="py-2">
                <div class="custom-control-input">
                  <label for="custom-control-label">
                    <input type="checkbox" v-model="user.agreed" />
                  </label>
                  By continue, you agree to
                  <router-link :to="{}">our terms and conditions</router-link>
                </div>
              </div>
              <div class="form-group">
                <wolf-button
                  load-text=""
                  caption="Register"
                  button-type="submit"
                  @btn-role="signUp"
                  classes="btn btn-block btn-primary"
                  :disabler="!user.fullname"
                  activator="registering"
                ></wolf-button>
              </div>
              <div class="mb-4 text-center">
                Already have account<router-link
                  :to="{ name: 'login' }"
                  class="text-primary"
                >
                  Login</router-link
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
  name: "SignUp",
  data: () => ({
    user: {
      fullname: null,
      email: null,
      phone_number: null,
      national_id: null,
      password: null,
      agreed: false
    },
    emailSent: false,
    emailError: false,
    phoneError: false,
    agreed: true
  }),
  created() {},
  methods: {
    signUp() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch("logout").then(() => {
            var formData = this.formData(this.user);
            let url = "register";
            let DispatchpParams = { formData: formData, url: url };
            this.emailError = false;
            this.phoneError = false;
            this.$store
              .dispatch("authRequest", DispatchpParams)
              .then(response => {
                if (response.data.email_error) this.emailError = true;
                else if (response.data.phone_error) this.phoneError = true;
                else if (response.data.success) {
                  this.$router.push({ name: "account" });
                }
              });
          });
        }
      });
    }
  }
};
</script>
