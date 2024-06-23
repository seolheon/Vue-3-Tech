<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();

const emits = defineEmits(['deleteItem']);

const handleClick = () => {
  emits('deleteItem', props.id);
};
</script>

<template>
    <button @click="handleClick">Delete</button>
</template>

<style scoped>
</style>
  