<template>
  <button
    :class="classes"
    :type="buttonType"
    @click="
      $store.state.activeBtn = activator;
      $emit('btn-role');
    "
    :disabled="$store.state.isLoading || disabler"
  >
    <template v-if="$store.state.activeBtn === activator">
      <p id="loading"><span></span><span></span><span></span></p>
    </template>
    <template v-else>
      {{ caption }}
    </template>
  </button>
</template>
<script>
export default {
  name: "DukaButton",
  data: () => ({ axiosRequestings: false }),
  props: {
    caption: {
      type: String,
      required: true,
    },
    loadText: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      default: "button",
    },
    height: {
      type: Number,
      default: 14,
    },
    width: {
      type: Number,
      default: 14,
    },
    color: {
      type: String,
      default: "#fff",
    },
    activator: {
      type: String,
      required: true,
    },
    disabler: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="css" scoped>
@-webkit-keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#loading {
  text-align: center;
  margin: 0;
}

#loading span {
  display: inline-block;
  width: 0.6125rem;
  height: 0.6125rem;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  vertical-align: middle;
  -webkit-animation-name: opacity;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;

  -moz-animation-name: opacity;
  -moz-animation-duration: 1s;
  -moz-animation-iteration-count: infinite;
}

#loading span:nth-child(2) {
  -webkit-animation-delay: 100ms;
  -moz-animation-delay: 100ms;
}

#loading span:nth-child(3) {
  -webkit-animation-delay: 300ms;
  -moz-animation-delay: 300ms;
}
</style>
