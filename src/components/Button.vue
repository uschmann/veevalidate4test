<script setup>

</script>

<template>
<button>
  <slot>
    Klick mich!
  </slot>
</button>
</template>

<style scoped>
button {
  position: relative;
  border: none;
  padding: 20px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

button:active {
  top: 1px;
  box-shadow: none;
}

button {
  margin-right: 10px;
}
</style>