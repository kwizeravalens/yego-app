<template>
  <div class="pt-5">
    <div class="row pt-2">
      <div class="col-12">
        <h5 class="mb-2">Requests overview</h5>
      </div>
    </div>
    <div class="row cards">
      <div class="col-6 px-2">
        <div class="card">
          <div class="card-body px-1">
            <div class="d-flex align-items-center">
              <img
                :src="`${publicPath}img/total.png`"
                class="card-img"
                alt=""
              />
              <div class="d-block">
                <span class="mb-0 d-block font-weight-bold"
                  >Total Requests</span
                >
                <h5 class="mb-0 d-block text-right">
                  {{ requests.total || 0 }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 px-1">
        <div class="card">
          <div class="card-body px-1">
            <div class="d-flex align-items-center">
              <img
                :src="`${publicPath}img/pending.png`"
                class="card-img"
                alt=""
              />
              <div class="d-block">
                <span class="mb-0 d-block font-weight-bold"
                  >Pending Requests</span
                >
                <h5 class="mb-0 d-block text-right">
                  {{ requests.pending || 0 }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row cards">
      <div class="col-6 px-2">
        <div class="card">
          <div class="card-body px-1">
            <div class="d-flex align-items-center">
              <img
                :src="`${publicPath}img/accepted.png`"
                class="card-img"
                alt=""
              />
              <div class="d-block">
                <span class="mb-0 d-block font-weight-bold">Accepted ones</span>
                <h5 class="mb-0 d-block text-right">
                  {{ requests.resolved || 0 }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 px-1">
        <div class="card">
          <div class="card-body px-1">
            <div class="d-flex align-items-center">
              <img
                :src="`${publicPath}img/denied.png`"
                class="card-img"
                alt=""
              />
              <div class="d-block">
                <span class="mb-0 d-block font-weight-bold">Canceled Ones</span>
                <h5 class="mb-0 d-block text-right">
                  {{ requests.canceled || 0 }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 px-2">
        <div class="mobile">
          <div class="mobile-body">
            <div class="bg-white">
              <h5 class="pt-3 d-flex px-3 text-primary">
                <span>Garages near you</span>
                <router-link
                  :to="{ name: 'map' }"
                  class="btn btn-sm btn-primary ml-auto"
                  style="padding: 0.2rem 1.57rem"
                  >Map</router-link
                >
              </h5>
              <div class="listing-content pb-3 px-3">
                <div class="d-flex align-items-center">
                  <div class="text-dark"><h6 class="mb-0">S/N</h6></div>
                  <div class="details-container">
                    <h5 class="mb-0">Garage</h5>
                  </div>
                  <div class="date-container ml-auto">
                    <span>Distance</span>
                  </div>
                </div>
              </div>
              <div
                class="listing-content pt-3 px-3"
                v-for="(garage, index) in garages"
                :key="'garage' + index"
              >
                <div class="d-flex align-items-center">
                  <div class="number-container">
                    {{ incrementIndex(index) }}
                  </div>
                  <div class="details-container">
                    <h5 class="text-dark mb-0">{{ garage.garage_name }}</h5>
                  </div>
                  <div class="date-container ml-auto">
                    <span>{{ garage.distance.toFixed(2) }} km</span>
                  </div>
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
  name: "DriverAccount",
  data: () => ({
    user: {},
    requests: {},
    garages: []
  }),
  created() {
    document.body.classList.remove("modal-open");
    let coords = !this.isEmpty(this.$store.state.coords)
      ? this.$store.state.coords
      : { lat: -1.9562495999999998, long: 30.1006848 };
    this.$store
      .dispatch("postRequest", {
        url: "dashboard",
        formData: this.formData(coords)
      })
      .then(response => {
        this.requests = { ...response.data.requests };
        this.garages = response.data.garages;
      });
  },
  methods: {}
};
</script>
<style lang="css" scoped>
.cards .card {
  border-radius: 0.25rem !important;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
}
img.card-img {
  width: 40px;
  height: 40px;
}
@media (max-width: 576px) {
  .goal-card {
    padding: 1rem 1rem;
  }
  .goal-card h6 i {
    display: none !important;
  }
}
.goal-card h6 {
  font-size: 0.875rem;
  color: #555;
}
.goal-card {
  padding: 0.5rem 1rem;
  background: #fff !important;
  padding-bottom: 0.5rem !important;
  margin-bottom: 10px;
}
.goal-card h4,
.goal-card h6 {
  margin-bottom: 0.5rem;
}
ul.header-notifications li a {
  padding: 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 50%;
}
ul.header-notifications li a .details {
  background: rgba(205, 22, 26, 0.3);
  padding: 0.7rem;
  width: 100%;
  border-radius: 0.25rem;
}
</style>
