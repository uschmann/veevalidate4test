<script setup>

import {computed, onMounted} from "vue";
import {useRouter} from "vue-router";
import ToolbarCard from "@/components/ToolbarCard.vue";
import {useTodoCreateStore} from "@/stores/todo/todoCreateStore";
import useVuelidate from "@vuelidate/core";
import { required, ipAddress, email } from '@vuelidate/validators'
import getErrors from "@/filters/getErrors";

const todoCreateStore = useTodoCreateStore();
const router = useRouter();
const v$ = useVuelidate({
    text: {required}
}, computed(() => todoCreateStore.todo));

let isOpen = computed({
  get() {
    return true;
  },
  set(isOpen) {
    if (!isOpen) {
      close();
    }
  }
});

function close() {
  router.push({name: 'about'});
}

onMounted(() => {
  todoCreateStore.createTodo();
});

</script>

<template>
  <v-dialog v-model="isOpen" max-width="600">
    <ToolbarCard title="More info">
      <template #items>
        <v-btn icon @click="close">
          <v-icon icon="mdi-close"/>
        </v-btn>
      </template>

      <v-container fluid v-if="todoCreateStore.todo">
        <v-row>
          <v-col>
            <p class="mb-2">{{todoCreateStore.todo}}</p>

            <v-form>
              <v-text-field variant="outlined"
                            density="compact"
                            label="Beschreibung"
                            :model-value="todoCreateStore.todo.text"
                            @update:model-value="todoCreateStore.todo.text = $event"
                            :error-messages="getErrors(v$.text.$errors)"
              />
            </v-form>

            <!--
            <pre>{{v$.text.$errors}}
            </pre>
            !-->

            <v-btn @click="v$.$validate()" class="mr-2">
              Validate
            </v-btn>

            <v-btn @click="todoCreateStore.createTodo">
              reset
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="primary">
          OK
        </v-btn>
      </v-card-actions>
    </ToolbarCard>
  </v-dialog>
</template>

<style scoped>

</style>