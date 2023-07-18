<script setup>
import {computed} from 'vue';
import Button from "@/components/Button.vue";
import useCountStore from "@/composables/countStore";

let countStore = useCountStore();

let stars = computed(() => {
  return countStore.counter.value < 0 ? 0 : countStore.counter.value;
});


</script>

<template>
  <div>
    <p>{{modelValue}}</p>
    <p>
    <span v-for="i in stars">
      <slot>⭐</slot>
    </span>
    </p>
    <Button @click="countStore.increment">
      +
    </Button>
    <Button @click="countStore.decrement">
      -
    </Button>
  </div>
</template>

<style scoped>

</style>