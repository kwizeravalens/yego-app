<template>
  <div>
    <input
      type="file"
      class="d-none"
      :id="inputId"
      @change="wolfUpload"
      ref="wolfInput"
    />
    <div v-if="wolfUploading">
      <transition enter-active-class leave-active-class="animated rollOut">
        <div
          class="modal fade show"
          style="
            z-index: 999999999;
            display: block;
            background: rgba(0, 0, 0, 0.7);
          "
        >
          <div class="modal-dialog modal-dialog-centered">
            <div
              class="modal-content rounded-0"
              style="border-color: transparent"
            >
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mt-3">
                      <span
                        ><b>{{ selectedFile }}</b></span
                      >
                      <div class="progress">
                        <div
                          class="progress-bar"
                          :class="{
                            'progress-bar-striped progress-bar-animated':
                              progressBarWidth < 100,
                            'bg-success': progressBarWidth >= 100,
                          }"
                          role="progressbar"
                          :aria-valuenow="progressBarWidth"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{ width: progressBarWidth }"
                        ></div>
                      </div>
                      <div class="w-100">
                        Uploading file. Please wait...
                        <span class="float-right">
                          {{ percentageCount }}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "WolfUpload",
  props: {
    uploadURL: {
      type: String,
      default: "ap/trashed-images",
    },
    needImagePreview: {
      type: Boolean,
      default: true,
    },
    extentions: {
      type: Array,
      default: function () {
        return ["png", "jpg", "gif", "jpeg"];
      },
    },
    inputId: {
      type: String,
      default: "wolf-file",
    },
  },
  data: () => ({
    selectedFile: null,
    wolfUploading: false,
    progressBarWidth: 60,
    percentageCount: null,
    wolfDocument: null,
    fileUploaded: false,
    uploading: true,
    invalidFile: false,
  }),
  methods: {
    handleFilePickUp() {
      this.$refs.wolfInput.click();
    },
    wolfUpload() {
      this.invalidFile = false;
      let uploadFile = document.getElementById(this.inputId);
      let FileUploadPath = uploadFile.value;
      let Extension = FileUploadPath.substring(
        FileUploadPath.lastIndexOf(".") + 1
      ).toLowerCase();
      this.selectedFile = uploadFile.files[0].name;
      if (this.extentions.includes(Extension)) {
        let fd = new FormData();
        fd.append("duka_upload", uploadFile.files[0], uploadFile.files[0].name);
        let imgDataUrl = URL.createObjectURL(uploadFile.files[0]);
        if (this.needImagePreview) {
          this.$emit("preview", imgDataUrl);
        }
        this.wolfUploading = true;
        this.$store.state.activeBtn = "wolf-button";
        this.axios
          .post(this.uploadURL, fd, {
            onUploadProgress: (uploadEvent) => {
              let percentage = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progressBarWidth = percentage + "%";
              this.percentageCount = percentage;
            },
          })
          .then((response) => {
            this.fileUploaded = true;
            this.wolfDocument = response.data.filename;
            this.$emit("after-uploading", response.data.filename);
            this.wolfUploading = false;
          })
          .catch((e) => {
            console.log(e);
          });
      } else this.invalidFile = true;
    },
  },
};
</script>
