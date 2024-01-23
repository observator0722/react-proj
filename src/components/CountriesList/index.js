import { TableContainer, Td, Table, Thead, Th, Tr, Tbody, Tfoot } from "@chakra-ui/table"

const CountriesList = () => {
  const countries = [
    'Russia',
    'Armenia',
    'Georgia'
  ]

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
              countries.map(c => <Tr><Td>{c}</Td></Tr>)
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