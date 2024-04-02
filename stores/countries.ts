import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', () => {
  const countries = ref<[ISearchResultList] | []>([])
  const countryDetails = ref<ISearchResultDetail | {}>({})
  const searchBy = ref<SearchCountryBy>('name')
  
  async function search(data: string) {
    try {
      const endpoint = useCountriesEndpoints(searchBy.value, data, 'globalSearch')
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
      const endpoint = useCountriesEndpoints('code', cca3, 'detailSearch')
      const result = await $fetch(endpoint)
      if (result) {
        countryDetails.value = <ISearchResultDetail>(result)
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