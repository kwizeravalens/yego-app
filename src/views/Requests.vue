<template>
  <div class="row gutters my-5 justify-content-center">
    <wolf-alert
      :modalTitle="alertDefaults.title"
      :modalContent="alertDefaults.content"
      :actionButton="alertDefaults.actionButton"
      @accept-alert="toggleActions(alertDefaults.actionType)"
      @close="closeAlert"
      :actionButtonClasses="alertDefaults.classes"
      v-if="alertDefaults.modalOpen"
    />
    <wolf-modal
      v-if="modalOpen"
      @close="toggleModal"
      style="display: block"
      :modalSize="'default'"
      :headerColor="'#c92f4e'"
      :need-footer="false"
    >
      <span slot="head" style="padding-top: 10px">Request car assistance</span>
      <div slot="body">
        <form class="forms-sample">
          <div
            class="form-group label-floating is-select"
            :class="{ 'is-empty': !newRequest.car_id }"
          >
            <label class="control-label">Select a car</label>

            <select
              class="form-control custom-select"
              name="Car"
              v-model="newRequest.car_id"
              validator="required"
              :class="{ 'is-invalid': errors.has('Car') }"
            >
              <option
                v-for="(car, index) in cars"
                :key="'car' + index"
                :value="car.id"
              >
                {{ `${car.plate_number} - ${car.make}` }}
              </option>
            </select>
            <div class="invalid-requestback" v-if="errors.first('Car')">
              {{ errors.first("Car") }}
            </div>
          </div>

          <floating-input
            type="textarea"
            v-model="newRequest.description"
            name="description"
            id="description"
            validator="required"
            label="Describe your car's problem"
          />
          <div class="payment-option">
            <h5>Select a payment method</h5>
            <div class="payment-item">
              <div class="d-flex align-items-center">
                <img
                  :src="`${publicPath}img/bank_cards.png`"
                  class="payment-cards"
                  alt=""
                />
                <span>Any bank cards</span>
                <img
                  :src="`${publicPath}img/check.png`"
                  class="img-fluid check-img ml-auto"
                  alt=""
                />
              </div>
            </div>
            <div class="payment-item">
              <div class="d-flex align-items-center">
                <img
                  :src="`${publicPath}img/paypal.png`"
                  class="payment-cards"
                  alt=""
                />
                <span>PayPal</span>
                <img
                  :src="`${publicPath}img/check.png`"
                  class="img-fluid check-img ml-auto"
                  alt=""
                />
              </div>
            </div>
            <div class="payment-item">
              <div class="d-flex align-items-center">
                <img
                  :src="`${publicPath}img/mastercard.png`"
                  class="payment-cards"
                  alt=""
                />
                <span>Master card</span>
                <img
                  :src="`${publicPath}img/check.png`"
                  class="img-fluid check-img ml-auto"
                  alt=""
                />
              </div>
            </div>
            <div class="payment-item">
              <div class="d-flex align-items-center">
                <img
                  :src="`${publicPath}img/visa.png`"
                  class="payment-cards"
                  alt=""
                />
                <span>Visa cards</span>
                <img
                  :src="`${publicPath}img/check.png`"
                  class="img-fluid check-img ml-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="w-100">
            <wolf-button
              load-text=""
              caption="Request now"
              button-type="submit"
              @btn-role="setRequest"
              classes="btn btn-block py-3 btn-primary"
              :disabler="!newRequest.car_id || !newRequest.description"
              activator="saving"
            ></wolf-button>
          </div>
        </form>
      </div>
    </wolf-modal>
    <div class="col-12">
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
            <h4 class="title-view-item mb-1">Requests History</h4>
            <span class="h5 subtitle-view-item"
              >{{ requests.length }} Requests</span
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
                <div class="text-dark"><h5 class="mb-0">S/N</h5></div>
                <div class="details-container">
                  <h5 class="mb-0">Garage &amp; date</h5>
                </div>
                <h5 class="mx-auto mb-0">Car</h5>
                <div class="date-container ml-auto">
                  <span>Status</span>
                </div>
              </div>
            </div>
            <div
              class="listing-content pt-3 px-3"
              v-for="(request, index) in requests"
              :key="'request' + index"
            >
              <div
                class="d-flex align-items-center"
                @click.capture="toggleMobileRecordActions('request' + index)"
              >
                <div class="number-container">
                  {{ incrementIndex(index) }}
                </div>
                <div class="details-container">
                  <h5 class="text-dark mb-0">{{ request.garage_name }}</h5>
                  <h6 class="text-primary">
                    {{ dukaHotelDate(request.request_date) }}
                  </h6>
                </div>
                <span class="mx-auto">{{ request.plate_number }}</span>
                <div class="date-container ml-auto">
                  <span>{{
                    request.resolved == 0 ? "Pending" : "Resolved"
                  }}</span>
                </div>
              </div>
              <div
                class="row-actions"
                v-if="$store.state.currentRow === 'request' + index"
              >
                <a href="javascript:void(0)">
                  <i class="icon-edit"></i> Edit record
                </a>
                <a href="javascript:void(0)">
                  <i class="icon-trash"></i> Delete record
                </a>
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
  name: "Requests",
  data: () => ({
    newRequest: {
      id: null,
      lat: -1.9562495999999998,
      long: 30.1006848,
      description: null,
    },
    cars: [],
    requests: [],
  }),
  created() {
    this.getCars();
    this.getRequests();
  },
  methods: {
    getCars() {
      this.$store.dispatch("getRequest", "get_driver_cars").then((response) => {
        this.cars = response.data.cars;
      });
    },
    getRequests() {
      this.$store
        .dispatch("getRequest", "get_driver_requests")
        .then((response) => {
          this.requests = response.data.requests;
        });
    },
    setRequest() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store
            .dispatch("postRequest", {
              formData: this.formData(this.newRequest),
              url: "request",
            })
            .then((response) => {
              if (response.data.success) {
                this.getRequests();
                this.toggleModal();
                this.clearObject(this.newRequest);
                this.$store.dispatch("togglePendingRequest", {
                  bool: true,
                  data: response.data,
                });
              }
            });
        }
      });
    },
  },
  updated() {
    this.$nextTick(() => {
      let items = document.querySelectorAll(".payment-item");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          [...item.parentElement.children].forEach((sib) =>
            sib.classList.remove("choosen")
          );
          item.classList.add("choosen");
        });
      });
    });
  },
};
</script>
<style lang="css">
.payment-option {
  display: block;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  background: #fff;
  padding: 1rem 1.5rem;
}
.payment-item {
  padding: 0 0.5rem;
}
.payment-item:not(:first-child) {
  border-top: 1px dashed #cac6c6;
  margin: 10px 0;
  padding-top: 4px;
}
img.payment-cards {
  width: 40px;
  height: 40px;
}
img.check-img {
  width: 20px;
  height: 20px;
}
.payment-item:not(.choosen) img.check-img {
  display: none;
}
.payment-item.choosen {
  background: #cac6c6;
}
</style>
