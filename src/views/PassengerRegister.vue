<template>
  <section>
    <div class="col-xs-12 col-sm-12">
      <div class="rest-container">
        <div class="text-center header-icon-logo-margin">
          <img
            src="@/assets/logo.png"
            alt="Main Logo"
          >
        </div>
        <div class="sign-up-form-container text-center">
          <h5>Create your Passenger account</h5>
          <hr>
          <form
            class="width-100"
            @submit.prevent="createAccount"
          >
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="newCustomer.firstname"
                  class="form-control"
                  type="text"
                  name="firstname"
                  placeholder="Your Firstname"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="newCustomer.lastname"
                  class="form-control"
                  type="text"
                  name="lastname"
                  placeholder="Your Lastname"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="newCustomer.phone"
                  class="form-control"
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="newCustomer.email"
                  class="form-control"
                  type="text"
                  name="email"
                  placeholder="Your Email address"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="newCustomer.password"
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Create Password"
                >
              </div>
            </div>
            <!-- <div class="form-group">
                        <div class="input-group border-bottom"> 
                          <input class="form-control" type="password" name="password" placeholder="Confirm Password">
                        </div>
            </div>-->
            <div class="form-submit-button">
              <button
                type="submit"
                class="btn btn-transparent-primary btn-block"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="col-xs-12 col-sm-12 text-center sms-rate-text font-roboto flex-end margin-bottom-30"
    >
      <div class="container-sms-rate-text width-100 font-11">
        <span class="light-gray font-weight-light">By signing up you have agreed to our</span>
        <br>
        <a
          href="javascript:void(0)"
          class="dark-link"
        >
          <span class="font-weight-light">Terms of Use &amp; Privacy Policy</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    newCustomer: {
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      password: null
    }
  }),
  methods: {
    createAccount() {
      var formData = this.formData(this.newCustomer);
      let url = "ap/set-customer";
      let DispatchpParams = { formData: formData, url: url };
      this.$store
        .dispatch("dukaPostRequest", DispatchpParams)
        .then(response => {
          if (!response.data.error) {
            this.clearObject(this.newCustomer);
            this.$router.replace({ name: "login" });
            window.location.reload();
          }
        });
    }
  }
};
</script>
