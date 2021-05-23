import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceheaderComponent } from './serviceheader/serviceheader.component';
import { DatedealershowComponent } from './datedealershow/datedealershow.component';
import { SummaryComponent } from './summary/summary.component';
import { TesttComponent } from './testt/testt.component';



@NgModule({
  declarations: [
    AppComponent,
    ServiceheaderComponent,
    DatedealershowComponent,
    SummaryComponent,
    TesttComponent,
  ],
  imports: [
    BrowserModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
