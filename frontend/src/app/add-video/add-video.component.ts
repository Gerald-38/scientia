import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from '../service/category.service';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  video: Video = {
    "id": '',
    "title": '',
    "description": '',
    "image": '',
    "duration": '',
    "location": '',
    "categories": [
      {
        "id": '',
        "name": ''
      }
    ],
    
  }

  imgRoot: string = "../../assets/images/";

  categories: Category[] | any;

  @Input() error: string | null | undefined;

  constructor(
    private videoService: VideoService,
    private categoryService: CategoryService,
    private router: Router) { }
    public image!: string;
    message!: string;


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data 
    });
  }
  
  saveVideo(): void {

    if(this.image) {
      this.video.image = this.image.split('C:\\fakepath\\').pop();
    }
    
  
    const video = {
      "title": this.video.title,
      "description": this.video.description,
      "image": this.video.image,
      "duration": this.video.duration,
      "location": this.video.location,
      "categories": [
          {
              "id": this.video.categories[0].id
          }
      ]
    }

    if (video.title && video.description && video.image && video.duration && video.location && video.categories[0].id) {      
      this.videoService.createVideo(this.video).subscribe(video => {
        alert("Video AJoutée");
        this.router.navigate(['/videos'])
      },
      error => {
        this.error = error.message;
        this.message = error.error.message; // L'erreur précise si le titre de la video est existant
      });
    }
    else {
      this.message = "tous les champs doivent être renseignés !!!"
    }
  }  
}
