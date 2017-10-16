import { ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { environment } from '../../environments/environment';

const subscriptionLink = new WebSocketLink({
  uri: environment.apollo.subscriptions,
  options: { reconnect: true }
});

export const createLink = (queryOrMutationLink: ApolloLink) => ApolloLink.split(
  ({ query }) => {
    // XXX: Yarn installs older version that doesn't have operation prop
    const { kind, operation}: any = getMainDefinition(query);
    const isSubscription = kind === 'OperationDefinition' && operation === 'subscription';

    return isSubscription;
  },
  subscriptionLink,
  queryOrMutationLink,
);
