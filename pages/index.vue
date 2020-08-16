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
        md="12"
        lg="10"
        xl="10"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {

}
</script>
