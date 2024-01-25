import { useEffect, useState } from "react"
import { getAllCountries, searchCountryByFullName } from "../../services/countries"
import { Input, Progress } from "@chakra-ui/react"
import CountriesTable from "../CountriesTable"

const CountriesList = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setLoading(true)

    getAllCountries()
      .then(data => {
        setCountries(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    setLoading(true)

    searchCountryByFullName(searchValue)
      .then(data => {
        setCountries(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchValue])

  // useEffect(() => {
  //   // запросить у сервера список стран соответствующих поисковой строке
  // }, [/* при изменении поискового запроса*/])

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Input placeholder='Search countries' m={4} value={searchValue} onChange={handleSearchValueChange} />

      {
        loading
          ? <Progress size='md' isIndeterminate />
          : <CountriesTable countries={countries} />
      }
    </>
  )
}

export default CountriesList