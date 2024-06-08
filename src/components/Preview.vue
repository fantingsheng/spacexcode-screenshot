<script setup>

</script>

<template>
  <div
    id="previewFrame"
    class="preview-frame"
    style="aspect-ratio: 4 / 3; width: auto; height: 100%; font-size: 4.06px; transform: none; transform-origin: 50% 50% 0px;"
  >
    <div
      class="frame-grident"
      style="background-image: linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%); opacity: 1;"
    ></div>
    <div class="mockup-wrapper" style="transform: scale(1) translateX(0%) translateY(0%);">
      <div class="screenshot"></div>
    </div>
  </div>
</template>

<style scoped>
.preview-frame {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, .04);
  overflow: hidden;
  position: relative;
}

.frame-grident {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 200%;
}

.mockup-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screenshot {

}
</style>