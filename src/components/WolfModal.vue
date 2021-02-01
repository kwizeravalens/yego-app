<template>
  <div>
    <transition enter-active-class leave-active-class="animated rollOut">
      <div
        class="modal fade show"
        style="
          z-index: 999999999;
          display: block;
          background: rgba(0, 0, 0, 0.7);
        "
      >
        <div class="modal-dialog modal-dialog-centered" :class="[modalSize]">
          <div class="modal-content rounded-0 border-0">
            <div
              class="modal-header wolf-modal-header py-3 d-flex align-items-center"
            >
              <a
                href="javascript:void(0)"
                @click.prevent="$emit('close')"
                class="btn bg-white rounded-circle"
                style="
                  width: 35px;
                  height: 35px;
                  line-height: 35px;
                  padding: unset;
                  position: absolute;
                  left: 17px;
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                  />
                </svg>
              </a>
              <h6
                class="modal-title text-white font-weight-bold"
                style="width: 100%; margin-left: 4rem !important"
              >
                <slot name="head"></slot>
              </h6>
            </div>
            <div class="modal-body" style="margin-top: 3.875rem">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="foot"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "DukaModal",
  props: {
    modalSize: String,
    needFooter: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.modal-xg {
  max-width: 1000px !important;
}
.wolf-modal-header {
  background: #c92f4e !important;
  border-radius: 0;
  color: #fff;
  border-color: transparent !important;
  position: fixed;
  width: 100%;
  z-index: 2;
}
.modal-content {
  background: #eff1f5 !important;
}
</style>
