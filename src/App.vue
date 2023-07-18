<script setup>
import NavigationItem from "@/components/navigation/NavigationItem.vue";
import {ref} from "vue";

let drawer = ref(true);


</script>

<template>
  <v-app id="inspire">

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" >
      <v-list>
        <NavigationItem title="Home"
                        :to="{name: 'home'}"
                        subtitle="Return to the homepage"
                        icon="mdi-home"/>
        <NavigationItem title="About"
                        :to="{name: 'about'}"
                        subtitle="Learn more"
                        icon="mdi-account"/>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>