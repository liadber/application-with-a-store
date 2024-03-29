import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentsModule} from './students/students.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // (Optional - Modules && Lazy Loading)
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
