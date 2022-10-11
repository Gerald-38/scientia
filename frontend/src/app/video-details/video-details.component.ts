import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
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
  message!: string;
  imgRoot: string = "../../assets/images/";
  isAdded: boolean = false;
  currentVideo: Video | any;
  // userVideos!: Video[] | any;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private userService: UserService ,private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {  
      this.videoService.getVideoById(id).subscribe(
        video => (this.video = video)                
      )
    }

    let userVideoChoice: any = sessionStorage.getItem('userVideos');
    let userVideos = JSON.parse(userVideoChoice) 
    // console.log (JSON.parse(userVideoChoice));
    if (id) {
    if (userVideos.some((x: string | null) => x === id)) {
      console.log('true');
     }
     else {
      console.log('false')
     }
    }      

  }

  onAddVideo(video: Video) {
    this.onAdd.emit(video)   
    this.videoService.addVideoToProfile(video);
    this.isAdded = true;
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
