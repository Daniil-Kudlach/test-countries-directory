export const countriesEndpoints = {
  all: (baseUrl: string) => `${ baseUrl }/all`,
  name: (baseUrl: string, name: string) => `${ baseUrl }/name/${ name }`,
  fullName: (baseUrl: string, name: string) => `${ baseUrl }/name/${ name }?fullText=true`,
  code: (baseUrl: string, code: string) => `${ baseUrl }/alpha/${ code }`,
  codes: (baseUrl: string,codes: string) => `${ baseUrl }/alpha/?codes=${ codes }`,
  region: (baseUrl: string, region: string) => `${ baseUrl }/region/${ region }`,
  currency: (baseUrl: string, code: string) => `${ baseUrl }/currency/${ code }`,
  demonym: (baseUrl: string, demonym: string) => `${ baseUrl }/demonym/${ demonym }`,
  language: (baseUrl: string, language: string) => `${ baseUrl }/lang/${ language }`,
  capital: (baseUrl: string, capital: string) => `${ baseUrl }/capital/${ capital }`,
  subregion: (baseUrl: string, sybregion: string) => `${ baseUrl }/sybregion/${ sybregion }`,
  translation: (baseUrl: string, translation: string) => `${ baseUrl }/translation/${ translation }`,
}