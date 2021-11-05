import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoutingComponents } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../src/environments/environment';
import { LoaderComponent } from './components/common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AuthModule.forRoot({
      ...environment.auth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


