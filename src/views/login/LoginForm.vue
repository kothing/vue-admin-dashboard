<template>
  <v-main>
    <v-container
      class="fill-height"
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
            class="elevation-12"
          >
            <v-toolbar
              color="general"
            >
              <v-toolbar-title>Admin Panel</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || 'This field is required']"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="Kothing"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
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
                color="general"
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
              <v-btn
                dark
                text
                @click="snackbar = false"
              >
                Close
              </v-btn>
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
        const username = this.username
        const password = this.password
        this.$store.dispatch('login', { username, password })
          .then(() => this.$router.push('/dashboard'))
          .catch(err => {
            console.log(err)
            this.snackbar = true
          },
          )
      },
    },
    metaInfo () {
      return {
        title: 'Super Secret | Login',
      }
    },
  }
</script>
