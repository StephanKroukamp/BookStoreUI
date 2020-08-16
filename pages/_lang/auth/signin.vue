<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>{{ $t('auth.signin.title') }}</v-toolbar-title>

            <v-spacer />

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  v-on="on"
                >
                  <v-icon>{{ icons.signIn }}</v-icon>
                </v-btn>
              </template>
              <span>{{ $t('navigation.signin') }}</span>
            </v-tooltip>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :label="$t('auth.signin.email')"
                name="email"
                type="text"
                outlined
              />

              <v-text-field
                id="password"
                v-model="password"
                :label="$t('auth.signin.password')"
                name="password"
                type="password"
                outlined
              />
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
              @click="signIn()"
            >
              {{ $t('auth.signin.title') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: 'administrator@bookstore.co.za',
      password: '@Test1234'
    }
  },
  computed: {
    ...mapGetters({
      icons: 'getIcons'
    })
  },
  methods: {
    async signIn () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
      } catch (e) {
      }
    }
  },
  head () {
    return { title: this.$t('auth.signin.title') }
  }
}
</script>
