<script setup>
import {Form, Field} from "vee-validate";
import {useUserDetailsStore} from "@/stores/user/userDetailsStore";
import {onMounted, ref, toRefs} from "vue";

let store = useUserDetailsStore();
const {createNewUser} = useUserDetailsStore();

const form = ref(null)

function onSubmit(e) {
  form.value.validate().then(result => {
    console.log(result);
    if (!result.valid) {
      alert("Bitte geben SIe die korrekten Daten ein...");
    }
  });
}

onMounted(() => {
  createNewUser();
});

</script>

<template>
  <v-container fluid>
    <v-row v-if="store.user">
      <v-col>
        <Form v-slot="{errors}"
              ref="form">
          <Field name="Firstname"
                 v-model="store.user.firstname"
                 rules="required|email"
                 v-slot="{errors}">
            <v-text-field label="Firstname"
                          v-model="store.user.firstname"
                          :error-messages="errors"/>
          </Field>
          <Field name="Lastname"
                 :model-value="store.user.lastname"
                 rules="required"
                 v-slot="{errors}">
            <v-text-field label="Lastname"
                          v-model="store.user.lastname"
                          :error-messages="errors"/>
          </Field>

          <v-btn type="submit" @click="onSubmit">
            Submit
          </v-btn>

          <h3>Form errors:</h3>
          <pre>{{ errors }}</pre>
        </Form>
      </v-col>
      <v-col>
        <pre>{{ store.user }}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>