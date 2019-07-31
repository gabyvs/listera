import { gql }      from 'apollo-boost';
import createClient from './ApolloClient';

export default class Client {

  private readonly client: any;

  constructor() {
    this.client = createClient();
  }

  fetchAllTasks() {
    this.client.query({
      query: gql`
      {
        tasks {
          name,
          id
        }
      }
      `
    }).then((result: any) => {
      console.log(`Fetching tasks: ${result}`);
    })
  }
}
