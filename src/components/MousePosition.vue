<script setup>
import {useMouse} from "@/composables/mouse";

const {x, y} = useMouse();
</script>

<template>
<p>Mouse position is at ({{x}}, {{y}})</p>
</template>

<style scoped>

</style>