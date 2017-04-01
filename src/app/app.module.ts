import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApolloModule } from 'apollo-angular';

// NgModules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ChatsModule } from './chats/chats.module';
import { CallsModule } from './calls/calls.module';
import { ContactsModule } from './contacts/contacts.module';
// Declarations
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
// rest
import { provideClient } from './apollo';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    // 3rd party modules
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ApolloModule.withClient(provideClient),
    // our modules
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ChatsModule,
    CallsModule,
    ContactsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
