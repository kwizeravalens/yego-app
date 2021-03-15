<template>
  <wolf-modal @close="gotoHome" style="display: block" :modalSize="'default'">
    <span slot="head" style="padding-top: 10px">Change your password</span>
    <div slot="body">
      <floating-input
        id="passsword"
        type="password"
        validator="required"
        v-model="credentials.password"
        name="Current Password"
        label="Your current passsword"
      />

      <floating-input
        id="new-password"
        type="password"
        validator="required"
        name="password"
        v-model="credentials.newPassword"
        label="Type new password"
      />

      <floating-input
        id="new-password-re"
        type="password"
        validator="required"
        name="Password Confirmation"
        data-vv-as="password"
        v-model="credentials.passwordConf"
        label="Re-type the new password"
      />

      <div class="w-100" v-if="invalidPassword">
        <div class="h6 text-danger">Invalid Current Password. Try again</div>
      </div>
      <div class="w-100 py-3" v-if="passwordChanged">
        <div class="alert h6 alert-success text-success">
          Your Password has been changed successfully.
        </div>
      </div>
      <wolf-button
        :loadText="'please wait...'"
        :caption="'Change Password'"
        @btn-role="changePassword"
        :classes="'btn btn-block btn-primary'"
        :disabler="!credentials.password"
        :activator="'settingaccountpassword'"
      />
    </div>
  </wolf-modal>
</template>
<script>
export default {
  name: "ChangePassword",
  data: () => ({
    currentUser: {},
    credentials: {
      newPassword: null,
      password: null,
      passwordConf: null,
    },
    invalidPassword: false,
    passwordChanged: false,
  }),
  methods: {
    gotoHome() {
      this.toggleModal();
      this.$router.push({ name: "account" });
    },
    changePassword() {
      var formData = this.formData(this.credentials);
      let url = "change_password";
      let DispatchpParams = { formData: formData, url: url };
      this.$store
        .dispatch("postRequest", DispatchpParams)
        .then((response) => {
          if (!response.data.invalid_password) {
            this.invalidPassword = false;
            this.passwordChanged = true;
            //this.clearObject(this.credentials);
          } else {
            this.invalidPassword = true;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
