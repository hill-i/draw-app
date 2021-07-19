<template>
  <div class="w-100 shadow">
    <div class="flex flex-row items-center">
      <div class="px-4 text-left text-2xl">ヘッダー</div>
      <div class="flex-grow"></div>
      <template v-for="item in items" :key="item.title">
        <app-bar-item v-bind="item" class="md:px-4 px-2 py-4"></app-bar-item>
      </template>
      <search-icon :on-click="openSearchDialog" class="p-4"></search-icon>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import AppBarItem from './AppBarItem.vue'
  import SearchIcon from './Icons/SearchIcon.vue'

  export default defineComponent({
    name: 'SideBar',
    components: {
      AppBarItem,
      SearchIcon,
    },
    setup() {
      const openSearchDialog = () => {
        console.log('clicked searchBtn')
      }
      const items = Array(2)
        .fill(0)
        .map((_, i) => ({
          title: `アイテム${i}`,
          onClick: () => {
            console.log('clicked: ', i)
          },
        }))
      return {
        items,
        openSearchDialog,
      }
    },
  })
</script>
