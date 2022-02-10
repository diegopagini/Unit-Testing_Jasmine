import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { HtmlComponent } from './components/html/html.component';
import { ComponentWithMethodsComponent } from './components/component-with-methods/component-with-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    HtmlComponent,
    ComponentWithMethodsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
