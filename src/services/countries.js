import http from "./http"

export const getAllCountries = async () => {
  const response = await http.get('all')
  return response.data
}

export const searchCountryByFullName = async (name) => {
  return await http.get(`name/${name}`)
}

export default {
  getAllCountries,
  searchCountryByFullName
}
