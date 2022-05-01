import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ButtonComponent } from '../components/Button'
import { Form } from '../components/Form'
import { Layout } from '../components/Layout'
import { TableMain } from '../components/Table'
import { useClients } from '../hooks/useClients'

const Home: NextPage = () => {
  const { 
    client,
    clients,
    clientDelete,
    clientSave,
    clientSelected,
    newClient,
    tableVisible,
    showTable
  } = useClients()

  return (
    <Flex fontSize={['3xl']} bgGradient="linear(to-r, blue.500, purple.500)" h="100vh" justifyContent="center" alignItems="center">
      <Layout title='Cadastro simples'>
      {tableVisible ? (
        <>
          <Flex justify="end">
            <ButtonComponent onClick={newClient} color='green'>Novo usuário</ButtonComponent>
          </Flex>
          {<TableMain client={clients} clientSelected={clientSelected} clientDelete={clientDelete} />}
        </>
      ) : (
          <Form cancel={showTable} client={client} clientChange={clientSave} />
      )}
        </Layout>
    </Flex>
  )
}

export default Home
