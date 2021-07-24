<template>
  <div class="flex flex-col w-screen">
    <app-bar></app-bar>
    <div class="w-3/4">
      <connect-canvas></connect-canvas>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AppBar from './components/AppBar.vue'
  import ConnectCanvas from "@/components/ConnectCanvas.vue";

  export default defineComponent({
    name: 'App',
    components: {
      AppBar,
      ConnectCanvas
    },
  })
</script>
