<template>
  <v-app-bar :elevation="2">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </v-app-bar>
</template>
<script setup lang="ts">
  const route = useRoute()
  const breadcrumbs = computed(() => {
    return route.meta.breadcrumbs ? route.meta.breadcrumbs : []
  })
</script>