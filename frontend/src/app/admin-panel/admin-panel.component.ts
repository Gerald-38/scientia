import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Category, CategoryService } from "../service/category.service";
import { UserService, User } from "../service/user.service";
import { Video, VideoService } from "../service/video.service";
// import { MatTableModule } from '@angular/material/table' 
// import { HttpClientService, User } from "../service/httpclient.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  @Output() onDeleteCategory: EventEmitter<Category> = new EventEmitter();
  @Output() onDeleteVideo: EventEmitter<Video> = new EventEmitter();
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  users: User[] | any;
  videos: Video[] | any;
  categories: Category[] | any;
  displayedColumns: string[] = ["username", "role"];

  constructor(private userService: UserService, private videoService: VideoService, private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
  this.userService.getUsers().subscribe(data => {
    this.users = data;      
  });

  this.videoService.getVideos().subscribe(data => {
    this.videos = data;      
  });

  this.categoryService.getCategories().subscribe(data => {
    this.categories = data;    
  });

  this.userService.getUsers().subscribe(data => {
    this.users = data;      
  });

  this.videoService.getVideos().subscribe(videos => {
    // this.videos = videos
    sessionStorage.setItem('videos', JSON.stringify(videos))
    // this.videos = console.log(data)     
  });

  this.userService.getUsers().subscribe(users => {
    sessionStorage.setItem('users', JSON.stringify(users))      
  });

}

  deleteUser(user: User): void {
    this.onDeleteUser.emit(user);
    if (confirm('Voulez-vous vraiment supprimer cet Utilisateur ?')) {
      this.userService.deleteUser(user).subscribe(
        () => { 
          console.log('utilisateur supprimé')
          location.reload();
        }
      );
    }
  }

  deleteCategory(category: Category) {
    this.onDeleteCategory.emit(category);
    let myVideos: Video[] | any= sessionStorage.getItem('videos');
    let allVideos = JSON.parse(myVideos);
    let count = 0;
    for (let video of allVideos) {
      if(video.categories[0].id == parseInt(category.id)) {
            count +=1
          }    
    }
    if (count > 0) {
      alert('impossible  de supprimer cette catégorie, elle est utilisée')
    }
    else {
      this.categoryService.deleteCategory(category).subscribe(
        () => { 
          console.log('catégorie supprimée')
          location.reload();
        }
      );
    }
  }

  deleteVideo(video: Video) {
    this.onDeleteVideo.emit(video);
    let myUsers: Video[] | any= sessionStorage.getItem('users');
    let allUsers = JSON.parse(myUsers);
    let countVideos = 0;
    console.log(allUsers)
    for (let user of allUsers) {
      for (let videoused of user.videos){
        if(videoused.id == parseInt(video.id)) {
          countVideos +=1
        }  
      }
    }
    if (countVideos > 0) {
      alert('impossible  de supprimer cette videos, elle est utilisée')
    }
    else {
      alert('ok')
      this.videoService.deleteVideo(video).subscribe(
        () => {       
          // this.router.navigate(['/videos']); 
          console.log('Vidéo supprimée');
          location.reload();
        }
      )
    }
  }
}
