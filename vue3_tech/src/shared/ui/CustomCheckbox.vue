<script setup>
</script>

<template>
  <div class="mb-6">
    <label class="custom-checkbox">
      <input class="visually-hidden hidden" type="checkbox">
      <span class="checker flex">
        <slot />
      </span>
    </label>
  </div>
</template>

  <style scoped>
.visually-hidden + .checker::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid #adb5bd;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }

  .visually-hidden:checked + .checker::before {
    border-color: #FFF;
    background-color: #57595B;
    background-image: url("../assets/images/confirm.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 90% 90%;
  }
  </style>