<template>
  <div class="p-4 text-center cursor-pointer hover:bg-gray-100" @click="onClick">{{ title }}</div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'SideBarItem',
    props: {
      title: String,
      onClick: Function,
    },
  })
</script>
