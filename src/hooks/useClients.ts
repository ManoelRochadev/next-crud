import { useEffect, useState } from "react"
import collectionClient from "../backend/db/collectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/clientRepository"
import { useVisible } from "./useVisible"

export function useClients() {
  const repo: ClientRepository = new collectionClient()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const {formVisible, tableVisible, showForm, showTable} = useVisible()

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })

  }

  function clientSelected(client: Client) {
    setClient(client)
    showForm()
  }

  async function clientDelete(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  async function clientSave(client: Client) {
    await repo.save(client)
    getAll()
  }

  return {
    client,
    clients,
    newClient,
    clientSave,
    clientDelete,
    clientSelected,
    getAll,
    tableVisible,
    showTable,
    showForm,
    formVisible,
  }
}