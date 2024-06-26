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
    <div @click="handleClick" class="cursor-pointer hover:bg-[#813d3d]">Удалить</div>
</template>

<style scoped>
</style>