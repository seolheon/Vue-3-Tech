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
    <div @click="handleClick" class="rounded-[15px]">Delete</div>
</template>

<style scoped>
</style>