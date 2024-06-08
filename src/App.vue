<script setup lang="ts">
import Preview from './components/Preview.vue'
import RightSideBar from './components/RightSideBar.vue'
import LeftSideBar from './components/LeftSideBar.vue'
</script>

<template>
  <main class="app-main">
    <div class="sidebar">
      <LeftSideBar />
    </div>
    <div class="canvas">
      <Preview />
    </div>
    <div class="sidebar">
      <RightSideBar />
    </div>
  </main>
</template>

<style scoped>
.app-main {
  display: flex;
  align-items: stretch;
  grid-gap: 8px;
  gap: 8px;
  padding: 8px;
  width: 100vw;
  height: 100vh;
  background: rgba(230, 230, 230, 1);
  transition: transform .3s ease;
}

.sidebar {
  display: flex;
  flex-direction: column;
  min-width: 248px;
  max-width: 248px;
  grid-gap: 4px;
  gap: 4px;
  z-index: 10;
}

.canvas {
  height: 100%;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 100px;
  display: grid;
  place-items: center;
}

@media (min-width: 1024px) {
  
}
</style>
