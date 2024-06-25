<script setup lang="ts">
  import  CatQuotesList  from '../widgets/CatQuotesList.vue'
  import  ReloadButton  from '../shared/ui/ReloadButton.vue'

  const catQuotesList = ref(null)

const handleReload = () => {
  catQuotesList.getCatQuotes();
};
</script>

<template>
  <div class="flex flex-row">
    <div class="scrollale-section flex flex-col justify-start rounded-r-2xl bg-dark-bg w-[40%] px-4 py-6 overflow-scroll h-[100vh]">   
        <CatQuotesList ref="catQuotesList"/>
    </div>
    <div class="p-10">
      <ReloadButton @reload="handleReload" class="bg-accent-main p-3"/>
    </div>
  </div>
</template>

<style scoped>
.scrollale-section::-webkit-scrollbar {
  width: 0px;
}
</style>
