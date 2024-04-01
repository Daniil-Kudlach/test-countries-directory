declare global {
  type SearchCountryBy = 'name' | 'fullName' | 'code' | 'codes' | 'region' | 'currency' | 'demonym' | 'language' | 'capital' | 'subregion' | 'translation'
  interface ISearchResultList {
    cca3: string,
    population: number,
    name: ICountryName,
    flags: IFlags
  }
  interface ISearchResultDetail {
    cca3: string,
    population: number,
    name: ICountryName,
    flags: IFlags,
    maps: IMaps,
    borders: [string | undefined]
  }
}

export {}