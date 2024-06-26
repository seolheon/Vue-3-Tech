<script setup lang="ts">
  import  CatQuotesList  from '../widgets/CatQuotesList.vue'
  import  LoadMoreButton  from '../shared/ui/LoadMoreButton.vue'
  import  CustomInput  from '../shared/ui/CustomInput.vue'

  const catQuotesList = ref(null)
  const details = ref('')
  const num1 = ref()
  const num2 = ref()
  const totalQuotes = ref(0)

  let num3:number

  watch(
  () => num1.value + num2.value,
  (sum) => {
    num3 = sum
  }
)

watch(
  () => catQuotesList.value?.catQuotes.length,
  (list) => {
    totalQuotes.value = list
    console.log('HUINYA', list)
  }
);

const handleLoadMore = () => {
  catQuotesList.value?.getCatQuotes();
};
</script>

<template>
  <div class="flex flex-row">
    <div class="scrollale-section flex flex-col justify-start rounded-r-2xl bg-dark-bg w-[35vw] px-4 py-6 overflow-scroll h-[100vh]">   
        <CatQuotesList @show-details="(data) => details = data" ref="catQuotesList"/>
    </div>
    <div class="p-10 flex flex-col w-[65vw] h-[100vh]">
      <div class="flex flex-row gap-5 justify-center items-center">
        <LoadMoreButton @load-more="handleLoadMore" class="bg-accent-main p-3 rounded-[15px]"/>
        <RouterLink to="/empty" class="bg-accent-main p-3 rounded-[15px] hover:bg-[#3d815c]">На пустую страницу</RouterLink>
        <CustomInput v-model="num1" type="number" placeholder="Число 1" class="border-b-0 p-2 w-24"/>
        +
        <CustomInput v-model="num2" type="number" placeholder="Число 2" class="border-b-0 p-2 w-24"/>
        =
        <CustomInput v-model="num3" type="number" placeholder="Результат" class="border-b-0 p-2 w-28" disabled/>
        <p>Число фактов: </p>
        <p>{{ totalQuotes }}</p>
      </div>
      <div class="flex flex-col h-[100vh] justify-center items-center">
        <div v-if="details"class="bg-dark-bg rounded-[20px] w-[500px] p-5 flex items-center">
          {{ details }}
        </div>
        <div v-else class="bg-dark-bg rounded-[20px] p-5 flex items-center">
          <img src="../shared/assets/filler.jpg"/>
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
