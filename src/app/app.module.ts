import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { appRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { LuzComponent } from './sensores/luz/luz.component';
import { SensoresModule } from './sensores/sensores.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SidebarModule,
    appRouting,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    SensoresModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
