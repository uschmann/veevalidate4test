<script setup>

  defineProps({
    icon: null
  });

</script>

<template>
  <v-list-item density="compact">
    <template #prepend>
      <v-icon :icon="icon"/>
    </template>
  </v-list-item>
</template>

<style scoped>

</style>