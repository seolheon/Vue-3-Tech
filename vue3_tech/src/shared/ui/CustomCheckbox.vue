<script setup>
const model = defineModel()

function update() {
  model.value = !model.value
}
</script>

<template>
  <div class="mb-6">
    <label class="custom-checkbox">
      <input class="visually-hidden hidden" type="checkbox" v-model="model">
      <span class="checker flex cursor-pointer">
        <slot />
      </span>
    </label>
  </div>
</template>

  <style scoped>
.visually-hidden + .checker::before {
    content: '';
    display: inline-block;
    width: 10em;
    height: 10em;
    border: 1px solid #adb5bd;
    margin-right: 0.5rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .visually-hidden:checked + .checker::before {
    border-color: #FFF;
    background-color: #57595B;
    background-image: url("../assets/confirm.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 90% 90%;
    cursor: pointer;
  }
  </style>