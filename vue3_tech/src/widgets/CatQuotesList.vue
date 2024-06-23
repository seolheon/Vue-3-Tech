<script setup lang="ts">
import { useCatQuoteStore } from "../shared/store/base";
import { catQuote } from '../shared/types';
import CatQuoteItem from './CatQuoteItem.vue';

const catQuoteStore = useCatQuoteStore();
const allCatQuotes = ref(<catQuote[]>[]);
const catQuotes = computed(() => allCatQuotes.value);

onMounted(async () => {
  await catQuoteStore.getCatQuotes();
  allCatQuotes.value = catQuoteStore.catQuotes;
  console.log('OnPage:', allCatQuotes.value);
});

const deleteCatQuote = (id: number) => {
  catQuoteStore.deleteCatQuote(id);
};
</script>

<template>
  <div>
    <div v-for="item in catQuotes" :key="item.id">
      <CatQuoteItem :id="item.id" :onDelete="deleteCatQuote">
        <p>{{ item.data }}</p>
      </CatQuoteItem>
    </div>
  </div>
</template>

<style scoped>
</style>