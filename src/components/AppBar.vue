<template>
  <v-app-bar app color="primary" dark elevation="0">
    <v-app-bar-nav-icon @click.stop="updateSidebarMenu"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="toggleTheme" icon v-bind="attrs" v-on="on">
          <v-icon> mdi-invert-colors</v-icon>
        </v-btn>
      </template>
      <span>{{ buttonText }}</span>
    </v-tooltip>

    <v-menu
      left
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="logout()">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </template>
      <span>Cerrar Sesión</span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      menu: false,
      fav: true,

      message: false,
      hints: true,
    };
  },
  computed: {
    ...mapGetters("tasks", ["sidebarMenu"]),
    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },
  methods: {
    ...mapActions("tasks", ["updateSidebarMenu", "logout"]),
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>