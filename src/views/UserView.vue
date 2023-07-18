<script setup>
import {Form, Field} from "vee-validate";
import {useUserDetailsStore} from "@/stores/user/userDetailsStore";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";

let {user, roles} = storeToRefs(useUserDetailsStore());
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
    <v-row v-if="user !== null">
      <v-col>
        <Form v-slot="{errors}" ref="form">
          <Field name="Firstname"
                 v-model="user.firstname"
                 rules="required"
                 v-slot="{errors}">
            <v-text-field label="Firstname"
                          v-model="user.firstname"
                          :error-messages="errors"/>
          </Field>
          <Field name="Lastname"
                 :model-value="user.lastname"
                 rules="required"
                 v-slot="{errors}">
            <v-text-field label="Lastname"
                          v-model="user.lastname"
                          :error-messages="errors"/>
          </Field>

          <Field name="E-Mail"
                 v-model="user.email"
                 rules="required|email"
                 v-slot="{errors}">
            <v-text-field label="E-Mail"
                          v-model="user.email"
                          :error-messages="errors"/>
          </Field>

          <Field name="Rolle"
                 v-model="user.role_id"
                 rules="required"
                 v-slot="{errors}">
            <v-select label="Rolle"
                      clearable
                      v-model="user.role_id"
                      :items="roles"
                      item-value="id"
                      item-title="text"
                      :error-messages="errors"/>
          </Field>

          <v-btn type="submit"
                 class="mr-2"
                 @click="onSubmit">
            Submit
          </v-btn>

          <v-btn color="red" @click="user.firstname = ''">
            Clear user name
          </v-btn>

          <h3>Form errors:</h3>
          <pre>{{ errors }}</pre>
        </Form>
      </v-col>
      <v-col>
        <pre>{{ user }}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>