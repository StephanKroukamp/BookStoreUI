<template>
  <v-app>
    <v-navigation-drawer
      ref="drawer"
      v-model="navigation.drawn"
      app
      clipped
    >
      <v-list-item
        class="hidden-sm-and-up"
      >
        <v-list-item-content>
          <v-list-item-title class="d-flex justify-center title">
            {{ $t('title') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="hidden-sm-and-up" />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-if="loggedIn"
        >
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider v-if="loggedIn" />

        <v-list-item
          v-if="!loggedIn"
          link
          nuxt
          :to="`/auth/signin?lang=${this.locale}`"
        >
          <v-list-item-action>
            <v-icon>{{ icons.signIn }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('navigation.signin') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="!loggedIn"
          link
        >
          <v-list-item-action>
            <v-icon>{{ icons.signUp }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('navigation.signup') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          link
          @click="signOut()"
        >
          <v-list-item-action>
            <v-icon>{{ icons.signOut }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('navigation.signout') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item>
          <v-select
            v-model="locale"
            :items="availableLocales"
            :item-text="'text'"
            :item-value="'value'"
            name="locale"
            :label="$t('settings.language')"
            menu-props="auto"
            hide-details
            single-line
            dense
          />
        </v-list-item>

        <v-divider />

        <v-list-item>
          <v-spacer />

          <v-btn
            class="mt-2"
            large
            icon
            @click.stop="toggleDarkTheme()"
          >
            <v-icon>{{ icons.theme }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="navigation.drawn = !navigation.drawn" />

      <v-toolbar-title
        class="align-center hidden-sm-and-down"
      >
        <span class="title">{{ $t('title') }}</span>
      </v-toolbar-title>
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
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    availableLocales: [
      { text: 'English', value: 'en' },
      { text: 'Afrikaans', value: 'af' }
    ],
    title: 'Book Store',
    navigation: {
      drawn: false
    }
  }),
  computed: {
    ...mapGetters({
      icons: 'getIcons',
      locales: 'persistent/getLocales',
      useDarkTheme: 'persistent/getUseDarkTheme'
    }),
    locale: {
      get () {
        return this.$store.state.persistent.locale
      },
      set (lang) {
        this.$store.commit('persistent/switchLocales', lang)

        this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
      }
    },
    loggedIn () {
      return this.$auth.loggedIn
    },
    user () {
      return this.$auth.user
    }
  },
  mounted () {
    this.$vuetify.theme.dark = this.useDarkTheme
  },
  methods: {
    toggleDarkTheme () {
      this.$store.commit('persistent/toggleUseDarkTheme')

      this.$vuetify.theme.dark = this.useDarkTheme
    },
    async signOut () {
      try {
        await this.$auth.logout('local')
      } catch (e) {
      }
    }
  }
}
</script>
