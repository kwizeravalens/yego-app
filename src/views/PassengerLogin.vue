<template>
  <section>
    <duka-alert
      v-if="alertDefaults.modalOpen"
      :modal-title="alertDefaults.title"
      :modal-content="alertDefaults.content"
      :action-button="alertDefaults.actionButton"
      :action-button-classes="alertDefaults.classes"
      :single-button="true"
      @accept-alert="closeAlert"
      @close="closeAlert"
    />

    <div class="col-xs-12 col-sm-12">
      <div class="rest-container">
        <div class="text-center header-icon-logo-margin">
          <img
            src="@/assets/logo.png"
            alt="Main Logo"
          >
        </div>
        <div class="sign-up-form-container text-center">
          <h6>Log into your passenger account</h6>
          <hr>
          <form
            class="width-100"
            @submit.prevent="logUser"
          >
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="credentials.username"
                  class="form-control"
                  type="text"
                  name="email"
                  placeholder="Email or Phone number"
                >
              </div>
            </div>
            <div class="form-group">
              <div class="input-group border-bottom">
                <input
                  v-model="credentials.password"
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                >
              </div>
            </div>

            <div class="form-submit-button">
              <button
                type="submit"
                class="btn btn-transparent-primary btn-block"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="false"
      class="bottom-btn"
    >
      <router-link
        :to="{ name:'register' }"
        class="btn btn-secondary rounded-0 btn-block"
      >
        Register your account
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      credentials: {
        username: null,
        password: null
      },
      invalidLogin: false,
      loginSucceed: false
    };
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.replace({ name: "dashboard" });
    }
  },
  methods: {
    logUser() {
      var formData = this.formData(this.credentials);
      this.$store.dispatch("authRequest", formData).then(response => {
        if (response.data.error) {
          this.alertDefaults = {
            title: "Can't log into your account",
            content: "Your Username or Password didn't",
            actionType: "loan_product_delete",
            actionButton: "Ok",
            classes: "btn btn-outline-danger btn-sm",
            modalOpen: true
          };
          this.invalidLogin = true;
          this.loginSucceed = false;
        } else {
          this.invalidLogin = false;
          this.loginSucceed = true;
          this.$router.replace({ name: "dashboard" });
          window.location.reload();
        }
      });
    }
  }
};
</script>
<style lang="css">
.bottom-btn {
  position: absolute;
  left: auto;
  right: auto;
  margin: 0 auto;
  width: 100%;
  bottom: 0;
}
</style>