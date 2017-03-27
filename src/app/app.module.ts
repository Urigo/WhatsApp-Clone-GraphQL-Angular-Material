import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatsModule } from './chats/chats.module';
import { provideClient } from './apollo';
import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ApolloModule.withClient(provideClient),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
