import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  {
    path: '**',
    redirectTo: 'file/upload',
    pathMatch: 'full'
  },
  {path: 'file/upload', component: FileUploadComponent},
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
