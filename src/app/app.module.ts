import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { appRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SidebarModule,
    appRouting

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
