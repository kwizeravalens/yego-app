<template>
  <div>
    <transition enter-active-class leave-active-class="animated rollOut">
      <div
        class="modal alert-modal fade show"
        id="modal-default"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-default"
        style="
          padding-right: 15px;
          display: block;
          background: rgba(0, 0, 0, 0.7);
        "
        @click.self="$emit('close')"
      >
        <div
          class="modal-dialog modal- modal-dialog-centered modal-"
          role="document"
        >
          <div
            class="modal-content rounded-0"
            style="border-color: transparent"
          >
            <div class="modal-header wolf-modal-header">
              <h6 class="modal-title text-white" id="modal-title-default">
                {{ modalTitle }}
              </h6>
              <button type="button" class="close" @click="$emit('close')">
                <span aria-hidden="true" class="text-white">×</span>
              </button>
            </div>
            <div class="modal-body text-left">
              <div
                class="font-weight-bold text-dark"
                v-html="modalContent"
              ></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                :class="'rounded-0 ' + actionButtonClasses"
                @click="$emit('accept-alert')"
              >
                {{ actionButton }}
              </button>
              <button
                v-if="!singleButton"
                type="button"
                class="btn btn-link ml-auto"
                @click="$emit('close')"
              >
                {{ closeButton }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "DukaAlert",
  props: {
    modalTitle: String,
    modalContent: {
      type: String,
      required: true
    },
    singleButton: {
      type: Boolean,
      default: false
    },
    actionButton: {
      type: String,
      required: true
    },
    actionButtonClasses: {
      type: String,
      required: true
    },
    closeButton: {
      type: String,
      default: "close"
    }
  },
  created() {
    this.toggleModalOpen();
  },
  destroyed() {
    this.toggleModalOpen();
  }
};
</script>
<style scoped>
.wolf-modal-header {
  background: #c92f4e !important;
  border-radius: 0;
  color: #fff;
}
</style>
