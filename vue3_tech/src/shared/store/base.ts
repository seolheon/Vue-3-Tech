import { defineStore } from "pinia";
import { catQuotes } from "../services/api"
import type { catQuote } from "../types"

export const useCatQuoteStore = defineStore('base',{
    state: () => ({
        catQuotes: <catQuote[]>[]
    }),
    actions: {
        getCatQuotes(){
            return catQuotes.fetchCatQuotes().then(({data}) =>{
                 this.catQuotes = data
                 console.log('Data', this.catQuotes)
            })
        }
    }
})