<template>
  <v-app>
    <v-main>
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <appbar-component v-if="logged" />
            <sidebar-component v-if="logged" />
            <v-slide-y-transition mode="out-in">
              <router-view />
            </v-slide-y-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar";
import AppBar from "./components/AppBar";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    "main-footer": Footer,
    "sidebar-component": Sidebar,
    "appbar-component": AppBar,
  },
  computed: {
    ...mapGetters("tasks", ["loggedUser"]),
    logged() {
      return this.loggedUser;
    },
    isAdmin() {
      return this.loggedUser && this.loggedUser.role == "ADMIN_ROLE";
    },
    isStandard() {
      return this.loggedUser && this.loggedUser.role == "STANDARD_ROLE";
    },
  },
  created() {
    this.autoLogin();
  },
  methods: {
    ...mapActions("tasks", ["autoLogin"]),
  },

  Footerdata: () => ({
    //
  }),
};
</script>
