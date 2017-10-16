import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// NgModules
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './apollo/graphql.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ChatsModule } from './chats/chats.module';
import { CallsModule } from './calls/calls.module';
import { ContactsModule } from './contacts/contacts.module';
// Declarations
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // our modules
    GraphQLModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ChatsModule,
    CallsModule,
    ContactsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
