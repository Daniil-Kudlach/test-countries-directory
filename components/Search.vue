<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>Countries Directory</v-app-bar-title>
      <v-text-field
        v-model="body"
        variant="outlined"
        append-inner-icon="mdi-magnify"
        density="compact"
        clearable
        hide-details
        @update:modelValue="searchCountryTimeout"
        @keydown.enter="searchCountry"
        @click:append-inner="searchCountry"
      >
      </v-text-field>
  </v-app-bar>
</template>
<script setup lang="ts">
  // config
  const route = useRoute()
  
  // data
  const body = ref<string>('')

  

  // search methods
  async function searchCountry () {
    const query = { ...route.query }
    if (!body.value && query.hasOwnProperty('search')) {
      delete query.search
    } else {
      query.search = body.value
    }
    navigateTo({ name: 'index', query })
  }

  const searchTimeout = ref<undefined | ReturnType<typeof setTimeout>>(undefined)
  function searchCountryTimeout () {
    clearTimeout(searchTimeout.value)
    searchTimeout.value = setTimeout(() => {  
      searchCountry()
      clearTimeout(searchTimeout.value)      
    }, 1000)
  }

  // init
  onBeforeMount(() => {
    const query = { ...route.query }
    if (<string>query.search) {
      body.value = <string>query.search
    }
  })
</script>