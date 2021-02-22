<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="loginForm">
                  <v-alert
                    text
                    prominent
                    type="error"
                    icon="mdi-cloud-alert"
                    v-if="wrongUserOrPassword"
                  >
                    Wrong username or password
                  </v-alert>

                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="email"
                    :rules="emailRules"
                  >
                  </v-text-field>

                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    :type="type"
                    v-model="password"
                    :rules="passwordRules"
                  >
                    <v-icon
                      @click="
                        type == 'password'
                          ? (type = 'text')
                          : (type = 'password')
                      "
                      slot="append"
                      color="#2b90d9"
                    >
                      {{ type == "password" ? "mdi-eye" : "mdi-eye-off" }}
                    </v-icon>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loadingButtonLogin"
                  color="primary"
                  to="/"
                  :disabled="!loginForm || loadingButtonLogin"
                  @click="login"
                  >Login
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loader: null,
      type: "password",
      loginForm: false,
      emailRules: [
        (value) => !!value || "Required.",
        (value) => (value || "").length <= 20 || "Max 20 characters",
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      ],
      passwordRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 6) || "Min 6 characters",
      ],
    };
  },
  computed: {
    ...mapGetters("tasks", [
      "userLogin",
      "wrongUserOrPassword",
      "loadingButtonLogin",
    ]),
    email: {
      get() {
        return this.userLogin.email;
      },
      set(val) {
        this.updateUserEmailLogin(val);
      },
    },
    password: {
      get() {
        return this.userLogin.password;
      },
      set(val) {
        this.updateUserPasswordLogin(val);
      },
    },
  },

  methods: {
    ...mapActions("tasks", [
      "updateUserEmailLogin",
      "updateUserPasswordLogin",
      "login",
    ]),
  },
};
</script>
<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
