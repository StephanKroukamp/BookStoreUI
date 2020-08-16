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
        <h1 class="Content__Title">
          {{ $t('about.title') }}
        </h1>
        <p>{{ $t('about.introduction') }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>
