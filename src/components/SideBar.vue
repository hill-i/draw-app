<template>
  <div class="mx-auto h-screen">
    <template v-for="item in items" :key="item.title">
      <side-bar-item v-bind="item"></side-bar-item>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import SideBarItem from "./SideBarItem.vue";
  export default defineComponent({
    name: 'SideBar',
    components: {
      SideBarItem
    },
    setup() {
      const items = Array(3).fill(0).map((_, i) => ({
        title: `アイテム${i}`,
        onClick: () => {
          console.log('clicked: ', i)
        },
      }))
      return {
          items
      }
    },
  })
</script>
