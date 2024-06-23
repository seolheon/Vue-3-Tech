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
        <div>
                <slot>Интересный факт про кошку</slot>
                <DeleteButton :id="id" @deleteItem="handleDelete" />
        </div>
</template>
      
<style scoped>
</style>