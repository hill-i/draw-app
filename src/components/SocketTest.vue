<template>
  <div>接続状態：{{ connectedStatus }}</div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue'
  import { useSocketStore } from '@/store/useSocketStore'
  export default defineComponent({
    setup() {
      const { socket, connected } = useSocketStore()
      const connectedStatus = computed(() =>
        connected ? '接続済み' : '切断済み'
      )
      return {
        socket,
        connectedStatus,
      }
    },
  })
</script>
