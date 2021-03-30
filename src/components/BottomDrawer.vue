<template>
  <div class="drawer-container">
    <div class="overlay-content d-flex" @click.self="$emit('close')">
      <div class="d-flex mx-auto my-auto">
        <slot name="overlaycontent" />
      </div>
    </div>
    <div class="drawer-dialog">
      <slot name="contents" />
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomDrawer",
  methods: {},
};
</script>
<style lang="css">
.drawer-container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999999;
  overflow: hidden;
  outline: 0;
  background: rgba(0, 0, 0, 0.5);
}
.overlay-content {
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 1051;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.drawer-dialog {
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  z-index: 1052;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  /* top: 40px; */
}
</style>
