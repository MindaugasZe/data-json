import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAllComponent } from '../display-all/display-all.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsComponent } from '../details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    DisplayAllComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent],

  exports: [
    HeaderComponent,
    FooterComponent],

  providers: [DataService],

  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule]
})
export class SharedModule { }
