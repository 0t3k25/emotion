<template>
  <div class="top">
    <v-app-bar color="deep-purple" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>マスツイ</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-for="(item, index) in menu_items" :key="index">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link :to="item.path">
                {{ item.name }}</router-link
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import "@mdi/font/css/materialdesignicons.css";
import constant from "./common/constant";

export default {
  data() {
    return {
      menu_items: constant.menu_items,
      drawer: false,
      group: null,
    };
  },
};
</script>

<style scoped>
.top {
  height: 70px;
}
</style>
