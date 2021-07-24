<template>
    <div></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { connectServer } from "@/utils/socket";

export default defineComponent({
    setup() {
        onMounted(() => {
            connectServer()
        })
    },
})
</script>
