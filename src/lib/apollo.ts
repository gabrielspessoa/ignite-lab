import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4yfbh0l3a01xmf2v0dd4z/master',
  cache: new InMemoryCache(),
});
