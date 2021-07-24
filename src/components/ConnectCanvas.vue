<template>
  <canvas ref="canvas" width="600" height="400"></canvas>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      const canvasRef = ref<HTMLCanvasElement>()
    },
  })
</script>
