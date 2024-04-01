<template>
  <v-skeleton-loader
      v-if="isLoading"
      type="card"
      class="v-col-12 v-col-md-4 v-col-sm-6"
    ></v-skeleton-loader>
  <v-row v-else class="pa-2 pt-4">
    <div v-if="!countries.length" class="v-col-12 text-center">No data</div>
    <v-col
      v-for="country in props.countries"
      :key="country.cca3" 
      class="d-flex child-flex" 
      cols="12"
      sm="6"
      md="4"
    >
      <v-card 
        class="d-flex flex-column"
        width="100%"
        @click="emit('openDetail', country.cca3)"
      >
        <v-img
          :src="country.flags.svg"
          :alt="country.flags.alt"
          min-height="200px"
          cover 
        ></v-img>
        <v-divider></v-divider>
        <div class="flex-grow-1 d-flex flex-column justify-end pa-4">
          <div class="d-flex justify-space-between font-weight-bold">
            <div>{{ country.name.official }}</div>
            <div>{{ country.cca3 }}</div>
          </div>
          <div class="fs-14">
            Population: 
            <span class="font-weight-bold">{{ country.population }}</span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  
</template>
<script setup lang="ts">
  const props = defineProps<{
    countries: [ISearchResultList] | [],
    isLoading: boolean
  }>()

  const emit = defineEmits(['openDetail'])
</script>