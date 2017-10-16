import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from '@kamilkisiela/apollo-angular';
import { HttpLinkModule, HttpLink } from '@kamilkisiela/apollo-angular-link-http';
import { NormalizedCache } from 'apollo-cache-inmemory';

import { environment } from '../../environments/environment';
import { createLink } from './link';
import { createCache } from './cache';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ]
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const queryOrMutationLink = httpLink.create({
      uri: environment.apollo.http
    });

    const link = createLink(queryOrMutationLink);
    const cache = createCache();
  
    apollo.create<NormalizedCache>({
      link,
      cache,
    });
  }
}