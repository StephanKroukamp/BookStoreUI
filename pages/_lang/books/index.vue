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
      {{ books }}
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('books')

    return { books: data }
  }
}
</script>
