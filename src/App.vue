<template>
  <div class="flex flex-col w-screen">
    <app-bar></app-bar>
    <div class="w-3/4">
      <span>コンテンツ</span>
      <socket-test></socket-test>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AppBar from './components/AppBar.vue'
  import SocketTest from "@/components/SocketTest.vue";

  export default defineComponent({
    name: 'App',
    components: {
      AppBar,
      SocketTest
    },
  })
</script>
