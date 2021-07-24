import { io, Socket } from 'socket.io-client'
import { computed, readonly, ref } from 'vue'

const socket = ref<Socket>()

export const connectServer = () => {
  if (typeof import.meta.env.VITE_SERVER_ADDRESS === 'string') {
    return io(import.meta.env.VITE_SERVER_ADDRESS)
  } else {
    throw new Error('接続先情報が設定されていません')
  }
}

export const useSocketStore = () => {
  if (!socket.value) {
    socket.value = connectServer()
  }
  return {
    socket: readonly(socket),
    connected: computed(() => (socket.value ? socket.value.connected : false)),
  }
}
