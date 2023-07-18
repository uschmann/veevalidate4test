<script setup>

import {Form, Field, ErrorMessage} from "vee-validate";

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}

function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  // All is good
  return true;
}

</script>

<template>
  <div>
    <Form @submit="onSubmit">
      <Field type="email" name="email" :rules="validateEmail"/>
      <ErrorMessage name="email"/>
      <button>Submit</button>
    </Form>
  </div>
</template>

<style scoped>

</style>