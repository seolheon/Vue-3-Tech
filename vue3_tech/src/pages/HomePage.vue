<script setup lang="ts">
  import  CatQuotesList  from '../widgets/CatQuotesList.vue'
  import  LoadMoreButton  from '../shared/ui/LoadMoreButton.vue'

  const catQuotesList = ref()
  const details = ref('')

const handleLoadMore = () => {
  catQuotesList.value.getCatQuotes();
};

</script>

<template>
  <div class="flex flex-row">
    <div class="scrollale-section flex flex-col justify-start rounded-r-2xl bg-dark-bg w-[35vw] px-4 py-6 overflow-scroll h-[100vh]">   
        <CatQuotesList @show-details="(data) => details = data" ref="catQuotesList"/>
    </div>
    <div class="p-10 flex flex-col w-[65vw] h-[100vh]">
      <div class="flex flex-row">
        <LoadMoreButton @load-more="handleLoadMore" class="bg-accent-main p-3"/>
      </div>
      <div class="flex flex-col h-[100vh] justify-center items-center">
        <div class="bg-dark-bg rounded-[20px] w-[500px] h-[250px] p-5 flex items-center ">
          {{ details }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollale-section::-webkit-scrollbar {
  width: 0px;
}
</style>
