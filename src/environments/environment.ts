// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apollo: {
    // http: 'https://api.graph.cool/simple/v1/cj0i77728mu2c0122es3qepny',
    // subscriptions: 'wss://subscriptions.graph.cool/v1/cj0i77728mu2c0122es3qepny'
    http: 'http://localhost:3000/graphql',
    subscriptions: 'ws://localhost:3100'
  }
};
