import http from "./http"

export const getAllCountries = async () => {
  const response = await http.get('all')
  return response.data
}

export const searchCountryByFullName = async (name) => {
  const response = await http.get(`name/${name}`)
  return response.data
}

export default {
  getAllCountries,
  searchCountryByFullName
}
