import { Button, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Client from '../core/Client'
import { IconEdit, IconTrash } from './Icon'

interface TableMainProps {
  client: Client[];
  clientSelected?: (Client: Client) => void;
  clientDelete?: (Client: Client) => void;
}

export function TableMain(props: TableMainProps) {
  const displayAction = props.clientSelected || props.clientDelete

  function renderClient() {
    return (
      <Tr>
        <Th p="6" color="gray.100">Código</Th>
        <Th p="6" color="gray.100">nome</Th>
        <Th p="6" color="gray.100">Idade</Th>
       {displayAction &&  <Th p="6" justifyContent="center" color="gray.100">Ações</Th>}
      </Tr>
    )
  }


  function renderData() {
    return props.client?.map((client, i) => {

      return (
        <Tr key={client.id} bg={i % 2 === 0 ? 'purple.200' : 'purple.100'}>
          <Td p="6">{client.id}</Td>
          <Td p="6">{client.name}</Td>
          <Td p="6">{client.age}</Td>
          {displayAction && renderActions(client)}
        </Tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <Td>
        {props.clientSelected ? (
          <IconButton mr="5" onClick={() => props.clientSelected?.(client)}
          color="green.500" bg="-moz-initial" aria-label='editar' size="sm" icon={<IconEdit/>} 
          />
        ): false}
        {props.clientDelete ? (
          <IconButton onClick={() => props.clientDelete?.(client)}
          color="red.500" bg="-moz-initial" aria-label='apagar' size="sm" icon={<IconTrash/>}  
          />
        ) : false}
      </Td>
    )
  }

  return (
    <TableContainer>
    <Table fontSize={["2xl"]} rounded="xl" overflow="hidden">
      <Thead bgGradient="linear(to-r, #aa02aa, #5e005e)">
        {renderClient()}
      </Thead>
      <Tbody>
        {renderData()}
      </Tbody>
    </Table>
    </TableContainer>
  )
}