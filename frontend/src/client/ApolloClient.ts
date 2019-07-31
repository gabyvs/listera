import ApolloClient                  from 'apollo-boost';
import { devEndpoint, prodEndpoint } from './config';

export default function createClient() {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
      });
    }
  });
}