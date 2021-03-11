import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeFileComponent } from './home-file/home-file.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OutPutTextComponent } from './out-put-text/out-put-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeFileComponent,
    SideBarComponent,
    OutPutTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
