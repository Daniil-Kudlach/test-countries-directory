<template>
  <v-card
    v-if="countryDetails.name"
    variant="outlined"
    class="ma-2"
  >
    <v-card-title>{{ countryDetails.name?.official }}</v-card-title>
    <v-img
      :src="countryDetails.flags?.svg"
      :alt="countryDetails.flags?.alt"
      cover 
    ></v-img>
    <v-card-text>
      <div>Population: <span class="font-weight-bold">{{ countryDetails.population }}</span></div>
      <div>CCA3: <span class="font-weight-bold">{{ countryDetails.cca3 }}</span></div>
      <NuxtLink :to="countryDetails.maps?.googleMaps" target="_blank">Link To Map</NuxtLink>
      
    </v-card-text>
  </v-card>
  <v-card 
    variant="outlined"
    class="ma-2"
  >
    <v-card-text>
      Borders:
      <span v-if="!countryDetails.borders?.length">has no borders with other countries</span>
      <NuxtLink 
        v-for="cca3 in countryDetails.borders"
        :key="cca3"
        :to="{ name: 'country-cca3', params: { cca3 } }"
        class="mr-2"
      >{{ cca3 }}</NuxtLink>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  //config 
  const route = useRoute()
  definePageMeta({ layout: 'detail', breadcrumbs: [
    { title: 'Countries Directory', to: { name: 'index' } },
    { title: 'Detail Country' }
  ] })
  useHead({ title: `${route.params.cca3} | Detail` })
  const store = useCountryStore()
  const { countryDetails } = storeToRefs(store)
  const state = reactive({
    isLoading: <boolean>false
  })
  // data
  onBeforeMount(async () => {
    if (route.params.cca3) {
      state.isLoading = true
      await store.searchDetail(route.params.cca3)
      state.isLoading = false
    }
  })
</script>