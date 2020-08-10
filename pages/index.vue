<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Welcome to the Bookstore
        </v-card-title>
        <v-card-text>
          <p>Feel free to browse and purchase</p>
          <p>
            For more information on the developer, check out his <a
              href="https://github.com/StephanKroukamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>.
          </p>
          <p>Thank you for visiting the bookstore.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Stephan Kroukamp</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/books"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

}
</script>
