<template>
    <button @click="handleClick" class="w-20 h-5 bg-white">НАЖМИ</button>
  </template>
  
  <script setup lang="ts">
  import { defineEmits } from 'vue';
  
  const emits = defineEmits(['reload']);
  
  const handleClick = () => {
    emits('reload');
  };
  </script>
  
  <style scoped>
  </style>
  