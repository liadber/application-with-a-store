// (Optional - Lazy Loading)

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {STUDENTS_KEY} from './students/store/students.state';
import {NgModule} from '@angular/core';

const appRouts: Routes = [
  {path: '', component: AppComponent},
  {path: STUDENTS_KEY, loadChildren: './students/students.module#StudentsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
