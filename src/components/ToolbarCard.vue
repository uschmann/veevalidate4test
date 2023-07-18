<script setup>

let props = defineProps({
  title: {
    type: String,
  }
})

</script>

<template>
  <v-card>
    <v-toolbar density="compact"
               color="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-toolbar-items>
        <slot name="items"/>
      </v-toolbar-items>
    </v-toolbar>
    <slot></slot>
  </v-card>
</template>

<style scoped>

</style>