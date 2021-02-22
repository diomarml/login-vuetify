<template></template>
<script>
import { mapActions, mapGetters } from "vuex";

// import Sidebar from "../components/Sidebar";
// import AppBar from "../components/AppBar";
export default {
  name: "Home",
  components: {
    // "sidebar-component": Sidebar,
    // "appbar-component": AppBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("tasks", ["sidebarMenu"]),
  },
  methods: {
    ...mapActions("tasks", ["logout", "updateSidebarMenu"]),
  },
};
</script>