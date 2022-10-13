import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService, User } from '../service/user.service';
import { VideoService, Video } from '../service/video.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  @Output() onAdd: EventEmitter<Video> = new EventEmitter();
  user!: User | any;
  video!: Video | any;
  message!: string;
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

    let userVideoChoice: any = sessionStorage.getItem('userVideos');
    let userVideos = JSON.parse(userVideoChoice)    
    // console.log ('Videos du User: ' + JSON.parse(userVideoChoice));
    // console.log ('Videos du User: ' + userVideos);
    // console.log ('Videos du User: ' + userVideos[0]);
    // console.log('Id de la video: ' + id);
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

  onDeleteVideo(video: Video) {
    if (confirm('Voulez-vous vraiment supprimer ce contenu ?')) {
      // let title: string = video.title;     
      this.videoService.deleteVideo(video).subscribe(
        () => {       
          this.router.navigate(['/videos']); 
          // location.reload();
        }
      )
    }    
  }

  ngOnDestroy(): void {   

  }

}
