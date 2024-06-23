<script setup lang="ts">
    import {ref, onMounted, computed } from "vue"
    import { useCatQuoteStore } from "../shared/store/base"
    import { catQuote } from '../shared/types';

    const catQuoteStore = useCatQuoteStore()
    const allCatQuotes = ref(<catQuote[]>[]);
    const catQuotes = computed(() => allCatQuotes.value);

    onMounted(async () => {
        await catQuoteStore.getCatQuotes()
        allCatQuotes.value = catQuoteStore.catQuotes;
        console.log('OnPage:', allCatQuotes.value)
    })
</script>

<template>
    <div>
        <div v-for="item in catQuotes" >
            <CatQuoteItem >
               <p>{{ item }}</p> 
            </CatQuoteItem>
        </div>
    </div>
</template>

<style scoped>

</style>