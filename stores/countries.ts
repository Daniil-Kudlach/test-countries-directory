import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', () => {
  const countries = ref<[ISearchResultList] | []>([])
  const countryDetails = ref<ISearchResultDetail | {}>({})
  const searchBy = ref<SearchCountryBy>('name')
  
  async function search(data: string) {
    try {
      console.log(searchBy.value)
      const endpoint = useCountriesEndpoints(searchBy.value, data)
      const result = await $fetch(endpoint)
      if (<[ISearchResultList]>(result)) {
        countries.value = <[ISearchResultList]>(result)
      }
      return result
    } catch(e) {
      console.error(e)
      clearCountries()
    }
  }

  async function searchDetail(cca3: string) {
    try {
      const endpoint = useCountriesEndpoints('code', cca3)
      const result = await $fetch(endpoint)
      if (result?.[0]) {
        countryDetails.value = <ISearchResultDetail>(result?.[0])
      }
      return result
    } catch(e) {
      console.error(e)
    }
  }

  function setSearchBy (searchByValue: SearchCountryBy) {
    searchBy.value = searchByValue
  }

  function clearCountries () {
    countries.value = <[]>([])
  }

  return {
    countries, countryDetails, searchBy,
    search, setSearchBy, clearCountries, searchDetail
  } 
})