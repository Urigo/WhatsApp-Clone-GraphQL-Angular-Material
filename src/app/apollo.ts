import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

/*
  explore the endpoint:
    https://api.graph.cool/simple/v1/cj0i77728mu2c0122es3qepny
*/
const graphcoolId = 'cj0i77728mu2c0122es3qepny';

// Create WebSocket client
const wsClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/${graphcoolId}`, {
  reconnect: true
});
const networkInterface = createBatchingNetworkInterface({
  uri: `https://api.graph.cool/simple/v1/${graphcoolId}`,
  batchInterval: 10,
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  addTypename: true,
  dataIdFromObject: (o: any) => {
    if (o.__typename && o.id) {
      return `${o.__typename}__${o.id}`;
    }
    return null;
  },
});

export function provideClient(): ApolloClient {
  return client;
}
