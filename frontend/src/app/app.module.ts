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
// import { MatTableModule } from '@angular/material/table';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GlobalDisplayComponent } from './global-display/global-display.component';


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
    GlobalDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatTableModule,
    // MatCardModule,
    // MatFormFieldModule,
    FormsModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatToolbarModule,
    HttpClientModule,
    // MatButtonModule

  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
