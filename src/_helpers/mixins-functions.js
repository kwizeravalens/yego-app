export const fxCore = {
  data() {
    return {
      apiURL:
        process.env.NODE_ENV === "production"
          ? "https://inkoko.rw/mobo-garage/"
          : "http://localhost/mobo-garage/",
      emptyResult: false,
      records: [],
      recordsLength: 0,
      dbResponse: {},
      isLoading: false,
      alertDefaults: {
        title: null,
        content: null,
        actionType: null,
        actionButton: null,
        classes: null,
        modalOpen: false
      },
      choosenRow: {},
      modalOpen: false,
      filterKey: null,
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    userLogged: function() {
      return this.$store.getters.isLoggedIn;
    },
    filteredRecords: function() {
      let filterKey = this.filterKey && this.filterKey.toLowerCase();
      let records = this.records;
      if (filterKey) {
        records = records.filter(row => {
          return Object.keys(row).some(key => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      return records;
    }
  },
  methods: {
    formData(obj) {
      let formData = new FormData();
      for (let key in obj) {
        if (obj[key] !== null) {
          if (typeof obj[key] === "object")
            formData.append(key, JSON.stringify(obj[key]));
          else formData.append(key, obj[key]);
        }
      }
      return formData;
    },
    incrementIndex(nbr) {
      return nbr + 1;
    },
    toggleParentClass(elementId, className) {
      let Element = document.getElementById(elementId);
      Element.classList.toggle(className);
    },
    closeAlert() {
      this.alertDefaults.modalOpen = false;
    },
    toggleModalOpen() {
      const elt = document.documentElement;
      if (elt.classList.contains("modal-open"))
        elt.classList.remove("modal-open");
      else elt.classList.add("modal-open");

      const el = document.body;
      if (el.classList.contains("modal-open"))
        el.classList.remove("modal-open");
      else el.classList.add("modal-open");
    },
    toggleModal() {
      this.toggleModalOpen();
      this.modalOpen = !this.modalOpen;
    },
    clearObject(obj) {
      for (let key in obj) {
        if (obj[key] === true) obj[key] = false;
        else if (obj[key] === false) continue;
        else obj[key] = null;
      }
      return obj;
    },
    falseObject(obj, On) {
      for (let key in obj) {
        if (key === On) obj[key] = true;
        else obj[key] = false;
      }
    },
    selectRecord(record) {
      this.choosenRow = record;
    },
    isEqual(arrLen, key) {
      return key === arrLen - 1;
    },
    isEmpty(obj) {
      const isNULL = Object.values(obj).every(x => x === null);
      return Object.keys(obj).length === 0 || isNULL === true;
    },
    addComma(num) {
      let regexp = /\B(?=(\d{3})+(?!\d))/g;
      return Number(num) ? num.toString().replace(regexp, ",") : null;
    },
    incrementObjectKey(obj, key, max = null) {
      if (max) {
        if (Number(obj[key]) <= max) {
          obj[key] = Number(obj[key]) + 1;
        }
      } else {
        obj[key] = Number(obj[key]) + 1;
      }
    },
    decrementObjectKey(obj, key, min = 1) {
      if (Number(obj[key]) > min) {
        obj[key] = Number(obj[key]) - 1;
      }
    },
    chatDate(str) {
      let options = {
        month: "short",
        day: "numeric"
      };
      let today = new Date(str);
      return today.toLocaleDateString("en-US", options);
    },
    dukaHotelDate(str) {
      let options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      let today = new Date(str);
      return today.toLocaleDateString("en-US", options);
    },
    toggleMobileRecordActions(rowKey) {
      if (this.$store.state.currentRow !== rowKey)
        this.$store.state.currentRow = rowKey;
      else this.$store.state.currentRow = null;
    }
  }
};
