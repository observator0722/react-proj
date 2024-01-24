import { TableContainer, Td, Table, Thead, Th, Tr, Tbody, Tfoot } from "@chakra-ui/table"
import { useEffect, useState } from "react"
import { getAllCountries } from "../../services/countries"
import { Progress } from "@chakra-ui/react"

const CountriesList = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    getAllCountries()
      .then(data => {
        setCountries(data)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Progress size='md' isIndeterminate />
  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Country name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            countries.map(c => <Tr key={c.name.common}><Td>{c.name.common}</Td></Tr>)
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Country name</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default CountriesList