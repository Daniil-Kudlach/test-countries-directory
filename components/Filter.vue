<template>
  <v-banner>
    <v-autocomplete
      v-model="searchParamsModel"
      :items="searchTypes"
      label="Search params:"
      variant="outlined"
      density="compact"
      hide-details
      @update:model-value="changeFilter"
    ></v-autocomplete>
  </v-banner>
</template>
<script setup lang="ts">
  //config
  const route = useRoute()

  const searchTypes = [
    { value: 'name', title: 'By name'},
    { value: 'fullName', title: 'By name (full match)'},
    { value: 'code', title: 'By code'},
    { value: 'region', title: 'By region'},
    { value: 'currency', title: 'By currency'},
    { value: 'demonym', title: 'By demonym'},
    { value: 'language', title: 'By language'},
    { value: 'capital', title: 'By capital'},
    { value: 'subregion', title: 'By subregion'},
    { value: 'translation', title: 'By translation'}
  ]

  const searchParamsModel = ref<SearchCountryBy>('name')

  async function changeFilter (value: SearchCountryBy) {
    const query = { ...route.query, filter: value }
    navigateTo({ name: 'index', query })
  }

  onBeforeMount(() => {
    const query = { ...route.query }
    if (<SearchCountryBy>query.filter) {
      searchParamsModel.value = <SearchCountryBy>query.filter
    }
  })
</script>