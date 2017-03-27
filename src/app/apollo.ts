import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// https://api.graph.cool/simple/v1/navysprite-flasher-276
const graphcoolId = 'navysprite-flasher-276';

// Create WebSocket client
const wsClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/${graphcoolId}`, {
  reconnect: true
});
const networkInterface = createNetworkInterface({
  uri: `https://api.graph.cool/simple/v1/${graphcoolId}`,
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  addTypename: true,
});

export function provideClient(): ApolloClient {
  return client;
}
