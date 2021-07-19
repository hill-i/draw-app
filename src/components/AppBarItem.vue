<template>
  <div class="text-center cursor-pointer hover:bg-gray-100" @click="onClick">
    {{ title }}
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'SideBarItem',
    props: {
      title: {
        type: String,
        default: '',
      },
      onClick: {
        type: Function,
        required: true,
      },
    },
  })
</script>
