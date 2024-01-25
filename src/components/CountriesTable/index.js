import { TableContainer, Td, Table, Thead, Th, Tr, Tbody, Tfoot } from "@chakra-ui/table"

const CountriesTable = ({countries}) => {
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

export default CountriesTable