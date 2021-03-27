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
      :headerColor="'#CD161A'"
      :need-footer="false"
    >
      <span slot="head" style="padding-top: 10px">Add a new car</span>
      <div slot="body">
        <form class="forms-sample">
          <floating-input
            type="text"
            v-model="newCar.make"
            name="Make"
            id="make"
            validator="required"
            label="Car Make"
          />

          <floating-input
            type="text"
            v-model="newCar.model"
            name="model"
            id="model"
            validator="required"
            label="Car Model"
          />

          <floating-input
            type="number"
            v-model="newCar.year"
            name="Year"
            id="Year"
            label="Released Year"
          />

          <floating-input
            type="text"
            v-model="newCar.plate_number"
            name="plate_number"
            id="plate_number"
            validator="required"
            label="Plate Number"
          />

          <floating-input
            type="textarea"
            v-model="newCar.comment"
            name="Comment"
            id="Comment"
            label="Write some comments(optional)"
          />

          <div class="w-100">
            <wolf-button
              load-text=""
              caption="Confirm and save"
              button-type="submit"
              @btn-role="addCar"
              classes="btn btn-block btn-primary"
              :disabler="!newCar.make || !newCar.plate_number"
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
            :style="
              `background-image:url(${publicPath}img/dataform_wood_pattern.jpg);padding-left:1.625rem`
            "
          >
            <h4 class="title-view-item mb-1">Your Cars</h4>
            <span class="h5 subtitle-view-item">{{ cars.length }} cars</span>
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
                  <h5 class="mb-0">Plate Number</h5>
                </div>
                <div class="date-container ml-auto">
                  <span>Status</span>
                </div>
              </div>
            </div>
            <div
              class="listing-content pt-3 px-3"
              v-for="(car, index) in cars"
              :key="'car' + index"
            >
              <div
                class="d-flex align-items-center"
                @click.capture="toggleMobileRecordActions('car' + index)"
              >
                <div class="number-container">
                  {{ car.id }}
                </div>
                <div class="details-container">
                  <h5 class="text-dark mb-0">{{ car.plate_number }}</h5>
                  <h6 class="text-primary">
                    {{ `${car.make}, ${car.model}, ${car.car_year}` }}
                  </h6>
                </div>
                <div class="date-container ml-auto">
                  <span>Active</span>
                </div>
              </div>
              <div
                class="row-actions"
                v-if="$store.state.currentRow === 'car' + index"
              >
                <a href="javascript:void(0)" @click.prevent="selectCar(car)">
                  <i class="icon-edit"></i> Edit record
                </a>
                <a href="javascript:void(0)" @click.prevent="carDelete(car)">
                  <i class="icon-trash"></i> Delete record
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="success-toast" v-if="successMessage">
        <div class="msg-container">
          <span>New car added successfully</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data: () => ({
    newCar: {
      id: null,
      make: null,
      model: null,
      year: null,
      plate_number: null,
      comment: null
    },
    cars: [],
    successMessage: false
  }),
  created() {
    this.getCars();
  },
  methods: {
    showSuccessToast() {
      setTimeout(() => {
        this.successMessage = false;
      }, 5000);
    },
    getCars() {
      this.$store.dispatch("getRequest", "get_driver_cars").then(response => {
        this.cars = response.data.cars;
      });
    },
    addCar() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch("postRequest", {
              formData: this.formData(this.newCar),
              url: "add_car"
            })
            .then(response => {
              if (!response.data.error) {
                this.getCars();
                this.clearObject(this.newCar);
                this.toggleModal();
                this.successMessage = true;
                this.showSuccessToast();
              }
            });
        }
      });
    },
    deleteCar() {
      this.$store
        .dispatch("postRequest", {
          url: "delete_car",
          formData: this.formData({ carId: this.choosenRow.id })
        })
        .then(() => {
          this.getCars();
        });
    },
    selectCar(car) {
      this.newCar = { ...car };
      this.newCar.year = car.car_year;
      this.toggleModal();
    },
    toggleActions(action) {
      switch (action) {
        case "car_delete":
          this.deleteCar();
          break;
        default:
          console.log("default data");
          break;
      }
      this.alertDefaults.modalOpen = false;
    },
    carDelete(car) {
      this.choosenRow = car;
      this.alertDefaults = {
        title: "Deleting a car",
        content: "Are you sure you want to delete this car",
        actionType: "car_delete",
        actionButton: "Yes, delete",
        classes: "btn btn-danger",
        modalOpen: true
      };
    }
  }
};
</script>
<style lang="css"></style>
