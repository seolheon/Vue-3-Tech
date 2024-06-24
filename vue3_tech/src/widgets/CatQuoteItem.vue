<script setup lang="ts">
import DeleteButton from '../shared/ui/DeleteButton.vue'

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
                <DeleteButton :id="id" @deleteItem="handleDelete" class=" bg-accent-main p-4" />
        </div>
</template>
      
<style scoped>
</style>