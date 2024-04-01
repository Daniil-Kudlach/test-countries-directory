interface ICountryName {
  common: string,
  official: string,
  nativeName: {
    official: string
  }
}

interface IFlags {
  alt: string,
  png: string, 
  svg: string
}

interface IMaps {
  googleMaps: string
}

interface ISearch {
  search: string,
  filter: string
}