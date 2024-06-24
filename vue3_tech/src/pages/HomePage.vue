<script setup lang="ts">
  import CatQuotesList from '../widgets/CatQuotesList.vue'
</script>

<template>
  <div class="flex flex-row">
    <div class="scrollale-section flex flex-col justify-start rounded-r-2xl bg-dark-bg w-[40%] px-4 py-6 overflow-scroll h-[100vh]">   
        <CatQuotesList />
    </div>
    <div class="p-10">
      fgdbd
    </div>
  </div>
</template>

<style scoped>
.scrollale-section::-webkit-scrollbar {
  width: 0px;
}
</style>