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
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  { path: '', component: AdminPanelComponent,canActivate:[AuthGaurdService] },
  { path: 'videos', component: VideosComponent,canActivate:[AuthGaurdService] },
  {path: 'video/:id', component: VideoDetailsComponent, canActivate:[AuthGaurdService]},
  { path: 'add-video', component: AddVideoComponent, canActivate:[AuthGaurdService] },
  { path: 'adduser', component: AddUserComponent},
  { path: 'user-profile', component: UserProfileComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'add-category', component: AddCategoryComponent, canActivate:[AuthGaurdService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
