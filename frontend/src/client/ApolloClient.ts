import ApolloClient from 'apollo-boost';

export default function createClient() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : 'https://listera-yoga-prod.herokuapp.com/';
  console.log(`BACKEND URL: ${url}`);
  console.log(`NODE ENV:`, process.env, JSON.stringify(process.env));

  const myFetch = (resource: any, init: any) => {
    const headers = init.headers || {};
    const newInit = {...init, headers: {...headers, 'Access-Control-Allow-Origin': '*'}};
    return fetch(resource, newInit);
  };

  return new ApolloClient({
    uri: url,
    fetch: myFetch,
    credentials: 'include',
    headers: { 'Access-Control-Allow-Origin': '*' },
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
          headers: { 'Access-Control-Allow-Origin': '*' }
        },
        credentials: 'include',
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }
  });
}