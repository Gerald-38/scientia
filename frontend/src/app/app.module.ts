import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GlobalDisplayComponent } from './global-display/global-display.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateVideoComponent } from './update-video/update-video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    VideosComponent,
    VideoDetailsComponent,
    AddVideoComponent,
    UsersComponent,
    UserProfileComponent,
    GlobalDisplayComponent,
    AdminPanelComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    UpdateVideoComponent,
    VideoViewerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
