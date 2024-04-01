import { countriesEndpoints }  from '~/configs/endpoints'

export const useCountriesEndpoints = (searchBy: SearchCountryBy, data: string) => {
  const config = useRuntimeConfig()
  const baseUrl = `${ config.public.restcountriesUrl }/${ config.public.restcountriesVersion }`
  return countriesEndpoints[searchBy](baseUrl, data) || countriesEndpoints.name(baseUrl, data)
}