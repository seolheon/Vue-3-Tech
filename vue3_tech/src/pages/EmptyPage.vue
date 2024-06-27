<script setup lang="ts">
  import CustomCheckbox from '../shared/ui/CustomCheckbox.vue'

  const showBack = ref(false)

</script>

<template>
    <div class="h-[100vh] p-[20%] flex flex-col gap-10 items-center">
        <RouterLink v-show="showBack" to="/" class="bg-accent-main p-3 rounded-[15px] max-w-[20%] hover:bg-[#3d815c]">На главную страницу</RouterLink>
        <CustomCheckbox v-model="showBack" class="bg-dark-bg p-12 rounded-[20px] cursor-pointer">
            <div class="bg-dark-bg text-[64px] flex items-center px-12">Как вернуться?</div>
        </CustomCheckbox>
    </div>
</template>

<style scoped>
</style>