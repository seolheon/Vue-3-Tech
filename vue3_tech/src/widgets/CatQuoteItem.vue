<script setup lang="ts">
import DeleteButton from '../shared/ui/DeleteButton.vue'
import DetailsButton from '../shared/ui/DetailsButton.vue'

const props = defineProps<{
  id: number;
  onDelete: (id: number) => void;

}>();

const handleDelete = () => {
  props.onDelete(props.id);
};

</script>

<template>
        <div class="text-left flex flex-row items-center gap-5 justify-between w-full p-5 bg-light-bg rounded-xl">
                <slot>Интересный факт про кошку</slot>
              <div class="flex flex-row gap-2">
                <DetailsButton :id="id" @detailsItem="handleDetails" class="bg-accent-main p-4 rounded-[15px] h-4 flex items-center justify-center"/>
                <DeleteButton :id="id" @deleteItem="handleDelete" class="bg-[#e38080] p-4 rounded-[15px] h-4 flex items-center justify-center" />
              </div>
        </div>
</template>
      
<style scoped>
</style>