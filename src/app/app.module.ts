import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './components/menu/menu.module';
import { HomeModule } from './home/home.module';
import { MatCustomIconService } from './services/mat-custom-icon.service';
import { HttpClientModule } from '@angular/common/http';
import { CurriculumModule } from './curriculum/curriculum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    HomeModule,
    HttpClientModule,
    CurriculumModule,
  ],
  providers: [MatCustomIconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
