<script setup lang="ts">
import { useCatQuoteStore } from "../shared/store/base";
import { catQuote } from '../shared/types';
import CatQuoteItem from './CatQuoteItem.vue';

const catQuoteStore = useCatQuoteStore();
const allCatQuotes = ref<catQuote[]>([]);
const catQuotes = computed(() => allCatQuotes.value);

const getCatQuotes = async () => {
  await catQuoteStore.getCatQuotes();
  allCatQuotes.value = catQuoteStore.catQuotes;
};

defineExpose({
  getCatQuotes
  })

const deleteCatQuote = (id: number) => {
  catQuoteStore.deleteCatQuote(id);
};

onMounted(async () => {
  await getCatQuotes();
  console.log('OnPage:', allCatQuotes.value);
});
</script>

<template>
  <div>
    <div v-for="item in catQuotes" :key="item.id" class="py-1.5">
      <CatQuoteItem :id="item.id" :onDelete="deleteCatQuote">
        <p>{{ item.data }}</p>
      </CatQuoteItem>
    </div>
  </div>
</template>

<style scoped>
</style>
