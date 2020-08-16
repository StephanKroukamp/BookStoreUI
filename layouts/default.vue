<template>
  <v-app
    id="bookstore"
  >
    <v-navigation-drawer
      ref="drawer"
      v-model="navigation.drawn"
      :width="navigation.width"
      app
      clipped
    >
      <v-list-item
        class="hidden-sm-and-up"
      >
        <v-list-item-content>
          <v-list-item-title class="d-flex justify-center title">
            {{ title }}
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
          to="/auth/signin"
        >
          <v-list-item-action>
            <v-icon>{{ icons.signIn }}</v-icon>
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
            <v-icon>{{ icons.signUp }} </v-icon>
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
            <v-icon>{{ icons.signOut }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sign Out
            </v-list-item-title>
          </v-list-item-content>
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
        <span class="title">{{ title }}</span>
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
    title: 'Book Store',
    navigation: {
      drawn: false,
      width: 256,
      borderSize: 3
    }
  }),
  computed: {
    ...mapGetters({
      icons: 'getIcons',
      useDarkTheme: 'navigation/getUseDarkTheme'
    }),
    direction () {
      return this.navigation.shown === false ? 'Open' : 'Closed'
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

    this.setBorderWidth()

    this.setEvents()
  },
  methods: {
    toggleDarkTheme () {
      this.$store.commit('navigation/toggleUseDarkTheme')

      this.$vuetify.theme.dark = this.useDarkTheme
    },
    setBorderWidth () {
      const i = this.$refs.drawer.$el.querySelector(
        '.v-navigation-drawer__border'
      )
      i.style.width = this.navigation.borderSize + 'px'
      i.style.cursor = 'ew-resize'
    },
    setEvents () {
      const minSize = this.navigation.borderSize
      const el = this.$refs.drawer.$el
      const drawerBorder = el.querySelector('.v-navigation-drawer__border')
      const vm = this
      const direction = el.classList.contains('v-navigation-drawer--right')
        ? 'right'
        : 'left'

      function resize (e) {
        document.body.style.cursor = 'ew-resize'
        const f = direction === 'right'
          ? document.body.scrollWidth - e.clientX
          : e.clientX
        el.style.width = f + 'px'
      }

      drawerBorder.addEventListener(
        'mousedown',
        function (e) {
          if (e.offsetX < minSize) {
            el.style.transition = 'initial'; document.addEventListener('mousemove', resize, false)
          }
        },
        false
      )

      document.addEventListener(
        'mouseup',
        function () {
          el.style.transition = ''
          vm.navigation.width = el.style.width
          document.body.style.cursor = ''
          document.removeEventListener('mousemove', resize, false)
        },
        false
      )
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
