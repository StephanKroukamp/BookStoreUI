<template>
  <v-app
    id="bookstore"
  >
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          link
        >
          <v-list-item-avatar>
            <img
              :src="`https://randomuser.me/api/portraits/men/${profile.picture}.jpg`"
              alt=""
            >
          </v-list-item-avatar>
          <v-list-item-title v-text="profile.name" />
        </v-list-item>

        <hr>

        <v-list-item
          v-if="!loggedIn"
          link
          nuxt
          to="/auth/signin"
        >
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sign In
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="!loggedIn"
          link
        >
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sign Up
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          link
          @click="signOut()"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sign Out
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">
              mdi-plus-circle-outline
            </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Browse Channels
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">
              mdi-cog
            </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Manage Subscriptions
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <v-app-bar
      app
      clipped-left
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon
        class="mx-4"
        large
      >
        mdi-book
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        />
      </v-row>
    </v-app-bar>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: 'Stephan\'s Book Store',
    drawer: null,
    profile: { picture: 28, name: 'Stephan' }
  }),
  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    },
    user () {
      return this.$auth.user
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    async signOut () {
      try {
        await this.$auth.logout('local')
      } catch (e) {
      }
    }
  }
}
</script>
