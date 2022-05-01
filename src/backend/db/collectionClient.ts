import Client from "../../core/Client";
import ClientRepository from "../../core/clientRepository";
import firebase from "../config";

export default class collectionClient implements ClientRepository {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      }
    },
    fromFirestore(snapshot: firebase.firestore.DocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
      const data = snapshot?.data(options)
      if (data) {
        return new Client(data.name, data.age, snapshot.id)
      }
  }
}

  async save(client: Client): Promise<Client> {
    if (client?.id) {
      await this.collection().doc(client.id).set(client)

      return client
    } else {
      const docRef = await this.collection().add(client)
      const doc = await docRef.get()
      
      return doc.data()
    }
  } 
  
  async delete(client: Client): Promise<void> {
    return this.collection().doc(client.id).delete()
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collection().get()

    return query.docs.map(doc => doc.data()) ?? []
  }

  private collection() {
    return firebase.firestore().collection("client")
    .withConverter(this.#conversor)
  }
}