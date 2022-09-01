// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { UserComponent } from './user/user.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  { path: '', component: UserComponent,canActivate:[AuthGaurdService] },
  { path: 'videos', component: VideosComponent,canActivate:[AuthGaurdService] },
  { path: 'video-details', component: VideoDetailsComponent,canActivate:[AuthGaurdService] },
  { path: 'add-video', component: AddVideoComponent, canActivate:[AuthGaurdService] },
  { path: 'adduser', component: AddUserComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
