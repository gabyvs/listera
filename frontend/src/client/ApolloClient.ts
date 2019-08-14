import ApolloClient from 'apollo-boost';

export default function createClient() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : 'https://listera-yoga-prod.herokuapp.com/';

  return new ApolloClient({
    uri: url,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
      });
    }
  });
}