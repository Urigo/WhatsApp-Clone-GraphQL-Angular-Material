import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { provideClient } from './apollo';
import { NavigationService } from './navigation/navigation.service';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    ApolloModule.withClient(provideClient),
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
