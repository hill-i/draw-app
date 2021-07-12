<template>
  <div class="flex-row">
    <side-bar class=""></side-bar>
    <div class="flex-shrink-0 w-9/12">コンテンツ</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SideBar from './components/SideBar.vue'

  export default defineComponent({
    name: 'App',
    components: {
      SideBar,
    },
  })
</script>
