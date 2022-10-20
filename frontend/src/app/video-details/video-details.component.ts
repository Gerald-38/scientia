import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../service/user.service';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  @Output() onAdd: EventEmitter<Video> = new EventEmitter();
  user!: User | any;
  video!: Video | any;
  imgRoot: string = "../../assets/images/";
  isAdded: boolean = false;
  currentVideo: Video | any;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private userService: UserService ,private router: Router) { }

  ngOnInit(): void {

    const id: any = this.route.snapshot.paramMap.get('id');
    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => (this.video = video)                
      )
    }
    
    // Recuperation de la liste des videos de l'utilisateur pour déterminer si la video courante est déjà dans sa liste
    let userVideoChoice: any = sessionStorage.getItem('userVideos');
    let userVideos = JSON.parse(userVideoChoice)
    if (userVideos && userVideos.indexOf(parseInt(id)) > -1) {
      this.isAdded = true
    }
    else {
      this.isAdded = false
    }
  }

  onAddVideo(video: Video) {
    this.onAdd.emit(video)   
    this.videoService.addVideoToProfile(video);
    this.isAdded = true;
  }

  onRemoveVideo(video: Video) {
    this.onAdd.emit(video)   
    this.videoService.removeVideoFromProfile(video);
    this.isAdded = false;
  }

  ngOnDestroy(): void {  
  }
}
