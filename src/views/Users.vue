<template>
  <div class="row gutters my-5 justify-content-center">
    <wolf-modal
      v-if="modalOpen"
      @close="toggleModal"
      style="display: block"
      :modalSize="'default'"
      :headerColor="'#c92f4e'"
    >
      <span slot="head" style="padding-top: 10px">Add a new user</span>
      <div slot="body">
        <form class="forms-sample">
          <floating-input
            type="text"
            v-model="newUser.firstname"
            :value="newUser.firstname"
            name="Firstname"
            id="Firstname"
            validator="required"
            label="Firstname"
          />

          <floating-input
            type="text"
            v-model="newUser.lastname"
            name="Lastname"
            id="Lastname"
            validator="required"
            label="Lastname"
          />

          <floating-input
            type="text"
            v-model="newUser.email"
            name="Email address"
            id="email"
            validator="required"
            label="Email address"
          />

          <floating-input
            type="text"
            v-model="newUser.phone_number"
            name="Phone"
            validator="required|digits:10"
            id="phone"
            label="Mobile number"
          />

          <floating-input
            type="password"
            v-model="newUser.password"
            validator="required"
            name="password"
            id="password"
            v-if="!newUser.id"
            label="Password"
            ref="password"
          />

          <floating-input
            type="password"
            id="passord-re"
            validator="required|confirmed:password"
            name="Password Confirmation"
            v-if="!newUser.id"
            data-vv-as="password"
            label="Password Confirmation"
          />

          <div class="text-right">
            <wolf-button
              load-text=""
              :caption="!newUser.id ? 'Save and Close' : 'Save Changes'"
              button-type="button"
              @btn-role="setUser"
              classes="btn btn-block btn-primary"
              :disabler="!newUser.firstname"
              activator="saving"
            ></wolf-button>
          </div>
        </form>
      </div>
    </wolf-modal>
    <div class="col-lg-12 mx-auto">
      <div class="mobile">
        <div class="mobile-body">
          <div class="date-container py-4" style="background-color: #772c2e">
            <div class="d-flex align-items-center">
              <img
                :src="`${publicPath}img/calendar-white.png`"
                class="date-icon"
                alt=""
              />
              <span class="h4 date-text mb-0 ml-3">{{
                this.dukaHotelDate(new Date())
              }}</span>
            </div>
          </div>
          <div
            class="title-container py-2"
            :style="`background-image:url(${publicPath}img/dataform_wood_pattern.jpg);padding-left:1.625rem`"
          >
            <h4 class="title-view-item mb-1">Your Poultry Account Users</h4>
            <span class="h5 subtitle-view-item"
              >{{ users.length }} user(s)</span
            >
            <img
              :src="`${publicPath}img/add.png`"
              @click="toggleModal"
              class="record-add"
            />
          </div>
          <div class="bg-white">
            <div class="listing-content pb-3 px-3">
              <div class="d-flex align-items-center">
                <div class="text-dark"><h5 class="mb-0">$/N</h5></div>
                <div class="details-container">
                  <h5 class="mb-0">Names &amp; email</h5>
                </div>
                <div class="date-container ml-auto"><span>Date In</span></div>
              </div>
            </div>
            <div
              class="listing-content pt-3 px-3"
              v-for="(user, index) in users"
              :key="'user' + index"
            >
              <div class="d-flex align-items-center">
                <div class="number-container">
                  <img
                    :src="`${publicPath}img/avatar.png`"
                    style="width: 30px; height: 30px"
                    alt="avatar"
                  />
                </div>
                <div class="details-container">
                  <h5 class="text-dark mb-0">
                    {{ `${user.firstname} ${user.lastname}` }}
                  </h5>
                  <h6 class="text-primary">{{ user.email }}</h6>
                </div>
                <div class="date-container ml-auto">
                  <span>{{ dukaHotelDate(user.created_at) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminUsers",
  data: () => ({
    users: [],
    newUser: {
      firstname: null,
      lastname: null,
      password: null,
      email: null,
      phone_number: null,
    },
  }),
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$store
        .dispatch("getRequest", "customer/get-users")
        .then((response) => {
          this.users = response.data.users;
        });
    },
    setUser() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var fd = this.formData(this.newUser);
          let url = "customer/set-user";

          let DispatchpParams = { formData: fd, url: url };
          this.$store
            .dispatch("postRequest", DispatchpParams)
            .then((response) => {
              if (!response.data.error) {
                this.getUsers();
                this.toggleModal();
                this.clearObject(this.newUser);
              }
            });
        }
      });
    },
    selectUser(user) {
      this.newUser = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone_number: user.phone,
        id: user.id,
      };
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this Famer?")) {
        this.$store
          .dispatch("getRequest", "customer/delete-user/" + id)
          .then(() => {
            this.getUsers();
          });
      }
    },
  },
};
</script>
