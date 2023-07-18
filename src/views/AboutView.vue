<script setup>

import ToolbarCard from "@/components/ToolbarCard.vue";
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <ToolbarCard title="About">
          <v-container fluid>
            <v-row>
              <v-col>
                <h1>About</h1>
                <p>Lorem ipsum blah blubbbb...</p>
                <v-btn :to="{name: 'about.more'}">
                  Learn more
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </ToolbarCard>
      </v-col>
    </v-row>
    <router-view/>
  </v-container>
</template>

<style scoped>

</style>