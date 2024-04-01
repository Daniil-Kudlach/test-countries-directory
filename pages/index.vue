<template>
  <Search />
  <Filter />
  <ModuleCountryList 
    :countries="countries"
    :isLoading="state.isLoading"
    @openDetail="openDetail"
   />
</template>
<script setup lang="ts">
  const route = useRoute()
  const { search, clearCountries, setSearchBy } = useCountryStore()
  const { countries } = storeToRefs(useCountryStore())
  function openDetail (cca3: string) {
    navigateTo({ name: 'country-cca3', params: { cca3 } })
  }
  useHead({ title: 'Countries Directory' })
  const state = reactive({
    isLoading: <boolean>false
  })

  watch(() => route.query, async value => {
    state.isLoading = true
    if (<SearchCountryBy>value.filter) {
      await setSearchBy(<SearchCountryBy>value.filter)
    }
    if (<string>value.search) {
      await search(<string>value.search)
    } else {
      clearCountries()
    }
    state.isLoading = false
  }, { immediate: true })
</script>