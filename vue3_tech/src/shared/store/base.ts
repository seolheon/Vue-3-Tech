import { defineStore } from "pinia";
import { catQuotes } from "../services/api"
import type { catQuote } from "../types"

export const useCatQuoteStore = defineStore('base',{
    state: () => ({
        catQuotes: <catQuote[]>[]
    }),
    actions: {
        getCatQuotes() {
            return catQuotes.fetchCatQuotes().then(({ data }) => {
                const someQuotes = data.map((quote: string, index: number) => ({
                    id: index + 1, 
                    data: quote
                }));
                this.catQuotes.push(...someQuotes)
                console.log('Data', this.catQuotes);
            });
        },
        deleteCatQuote(id: number) {
            let catQuoteToDeleteIndex = this.catQuotes.findIndex(el => el.id === id);
            if (catQuoteToDeleteIndex !== -1) {
                this.catQuotes.splice(catQuoteToDeleteIndex, 1); 
            }
        } 
    }
})