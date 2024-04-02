import { countriesEndpoints }  from '~/configs/endpoints'

const useSearchParams = (searchParamsKey: string) => {
  switch (searchParamsKey) {
    case 'globalSearch': return 'fields=cca3,population,name,flags' 
    case 'detailSearch': return 'fields=cca3,population,name,flags,maps,borders'
    default: return ''
  }
}

export const useCountriesEndpoints = (searchBy: SearchCountryBy, data: string, searchParamsKey: string) => {
  const config = useRuntimeConfig()
  const baseUrl = `${ config.public.restcountriesUrl }/${ config.public.restcountriesVersion }`
  let url = countriesEndpoints[searchBy](baseUrl, data) || countriesEndpoints.name(baseUrl, data) 
  if (url.includes('?')) {
    url += `&${useSearchParams(searchParamsKey)}`
  } else {
    url += `?${useSearchParams(searchParamsKey)}`
  }
  return url
}