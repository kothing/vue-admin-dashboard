<template>
  <v-main>
    <v-container
      class="page-login fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card
            class="elevation-6"
            transition="scroll-y-transition"
          >
            <v-card-title>
              <div class="primary--text text-h4">
                Material Admin Template
              </div>
            </v-card-title>
            <v-card-text>
              <v-alert type="success">
                Account: admin/123
              </v-alert>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || 'This field is required']"
                  append-icon="mdi-account"
                  label="Login"
                  type="text"
                  outlined
                  placeholder="Kothing"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  outlined
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5" />
            <v-card-actions>
              <v-spacer />
              <v-btn
                align-center
                justify-center
                color="primary"
                @click="login"
              >
                Login
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :top="true"
            >
              {{ errorMessages }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  dark
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        errorMessages: 'Incorrect login info',
        snackbar: false,
        color: 'general',
        showPassword: false,
      }
    },

    // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
    methods: {
      login: function () {
        const _this = this
        const username = this.username
        const password = this.password
        this.$store.dispatch('login', { username, password })
          .then(() => {
            _this.$router.push('/dashboard')
          })
          .catch(_err => {
            _this.snackbar = true
          })
      },
    },
    metaInfo () {
      return {
        title: 'Admin panel | Login',
      }
    },
  }
</script>
