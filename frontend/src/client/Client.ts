import { gql }      from 'apollo-boost';
import createClient from './ApolloClient';

const TASKS_QUERY = gql`
      query tasks {
        tasks {
          name,
          id
        }
      }
      `;

interface QueryResponse {
  data?: any;
  loading: boolean;
  error?: any;
}

export default class Client {

  private readonly client: any;

  constructor() {
    this.client = createClient();
  }

  tasks() {
    return this.client.query({
      query: TASKS_QUERY
    })
      .then((response: QueryResponse) => {
        if (response.error) {
          console.log(`Error loading tasks: ${response.error}`);
          throw new Error('Error loading tasks');
        }
        return response.data.tasks;
      });
  }
}
