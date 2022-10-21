import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service';
import { Category, CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[] | any;
  categories: Category[] | any;
  displayedColumns: string[] = ["title"];
  choixCatego: boolean = false;
  choosenCategory!: string;
  imgRoot: string = "../../assets/images/";

  constructor(private videoService: VideoService, private categoryService: CategoryService, private authentService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(data => {
      this.videos = data  
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data 
    });

    this.authentService.saveUser()

    let currentUser = sessionStorage.getItem('username');
    if (currentUser) {
      this.userService.getVideosByUserName(currentUser).subscribe(
        videos => videos,
        error => console.log('pas de video dans le profil'),
      )
    }
  } 

  onSelectByCategory(): void {
    this.choixCatego = true;
  }

  onReload() {
    window.location.reload()
  }  
}
