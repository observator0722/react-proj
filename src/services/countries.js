import http from "./http"

export const getAllCountries = async () => {
  return await http.get('all')
}

export const searchCountryByFullName = async (name) => {
  return await http.get(`name/${name}`)
}

export default {
  getAllCountries,
  searchCountryByFullName
}
