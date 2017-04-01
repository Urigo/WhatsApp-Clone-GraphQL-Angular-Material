# WhatsApp

WhatsApp clone built with Angular and GraphQL

## Angular

- [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
- [Material](https://github.com/angular/material2)
- [FlexLayout](https://github.com/angular/flex-layout)

## GraphQL

- [ApolloGraphQL](http://dev.apollodata.com) communicates with the backend
- [graph.cool](http://graph.cool) as a backend
- [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator) to have GraphQL Documents desribed in TypeScript
- [graphql-config](https://github.com/graphcool/graphql-config) gives GraphQL support for your editor

### Easiest way to start

```
$ npm start
```

### Own endpoint

Use [`graphql-up`](https://www.npmjs.com/package/graphql-up) to create an endpoint:

```
graphql-up schema.graphql
```

Change the `graphcoolId` variable in [`./src/app/apollo.ts`](./src/app/apollo.ts) to match it with your endpoint

Now it's all ready to play with!
