import { io } from 'socket.io-client'

export const connectServer = () => {
  if (typeof import.meta.env.VITE_SERVER_ADDRESS === 'string') {
    return io(import.meta.env.VITE_SERVER_ADDRESS)
  } else {
    throw new Error('接続先情報が設定されていません')
  }
}
