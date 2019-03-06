import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Navigation/MobileDropNav';


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleDrop(_, variables, { cache }) {
            // read the navOpen value from the cache
            const { dropOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // Write the nav State to the opposite
            const data = {
              data: { dropOpen: !dropOpen },
            };
            cache.writeData(data);
            return data;
          },
          toggleSignin(_, variables, { cache }) {
            const { signinOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = {
              data: { signinOpen: !signinOpen },
            };
            cache.writeData(data);
            return data
          }
        },
      },
      defaults: {
        dropOpen: false,
        signinOpen: true,
      },
    },
  });
}

export default withApollo(createClient);
