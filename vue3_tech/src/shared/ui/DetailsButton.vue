<script setup lang="ts">

const props = defineProps<{
  id: number;
}>();

const emits = defineEmits(['detailsItem']);

const handleClick = () => {
  emits('detailsItem', props.id);
};
</script>

<template>
    <div @click="handleClick">Фулл</div>
</template>

<style scoped>
</style>