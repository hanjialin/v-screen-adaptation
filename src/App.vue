<template>
  <VScreenAdaptation height="1080" :mode="mode" :scale="scale">
    <div style="position: relative; height: 100%; width: 100%">
      <div class="item" style="top: 0; left: 0"></div>
      <div class="item" style="top: 0; right: 0"></div>
      <div class="item" style="bottom: 0; left: 0"></div>
      <div class="item" style="bottom: 0; right: 0"></div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />

      <div>
        <button @click="change">{{ mode }}</button>
      </div>
      <div>
        <input id="mySlider" v-model.number="scale" type="range" min="1" max="2.8" step="0.1" />
        <span style="width: 20px; display: inline-block"> {{ scale }}</span>
      </div>
    </div>
  </VScreenAdaptation>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import VScreenAdaptation from '../package'
import { ref } from 'vue'

const mode = ref('auto')
const scale = ref(1)
const change = () => {
  if (mode.value === 'auto') {
    mode.value = 'freedom'
  } else {
    mode.value = 'auto'
  }
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.item {
  background: #000;
  width: 50px;
  height: 50px;
  position: absolute;
}
</style>
