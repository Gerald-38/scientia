import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from '../service/category.service';
import { Video, VideoService } from '../service/video.service';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.scss']
})
export class UpdateVideoComponent implements OnInit {
  videoCategories: Category[] | any;
  video: Video | undefined;
  videoToEdit: Video | any;
  updateFormVideo!: FormGroup;
  id!: string; 
  catego: Category[] = [{
    "id": '',
    'name': ''
  }]
  public videoImage!: string;

  constructor(private videoService: VideoService, private categoryService: CategoryService, private route: ActivatedRoute,private fb: FormBuilder,private router: Router ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.videoCategories = data 
    }); 
    
    const idParam = this.route.snapshot.paramMap.get('id'); // id dans l'url
    if(idParam)
    this.id = idParam;
    this.initUpdateForm(); // initialisation du formulaire

    // mise à jour du formulaire après l'instanciation de ce dernier
    this.videoService.getVideoById(this.id).subscribe(video => {
      // on récupère l'instance du formulaire et on met à jour les champs du formulaire
      // avec la méthode patchValue du formGroup
      this.updateFormVideo.patchValue(video);
    }
    );

    this.videoService.getVideoById(this.id).subscribe(videoToEdit => {
      // on récupère l'instance du formulaire et on met à jour les champs du formulaire
      // avec la méthode patchValue du formGroup
      this.videoToEdit = videoToEdit
    }
    );
  }

  initUpdateForm() {

    this.updateFormVideo = this.fb.group(
      {        id : 0,
        title: new FormControl('', [
          Validators.required,
        ]),
        description: new FormControl('', [
          Validators.required
        ]),
        image: new FormControl('', [
        ]),
        duration: new FormControl('', [
          Validators.required
        ]),
        location: new FormControl('', [
          Validators.required
        ]),
        categories: new FormControl([{'id':''}], [
          Validators.required,
        ]),
      }
    );
  }

   // getter pour la validation dans le formulaire errors
  get title() { return this.updateFormVideo.get('title'); }
  get description() { return this.updateFormVideo.get('description'); }
  get image() { return this.updateFormVideo.get('image'); }
  get duration() { return this.updateFormVideo.get('duration'); }
  get location() { return this.updateFormVideo.get('location'); }
  get categories() { return this.updateFormVideo.get('categories'); }

  onSubmit(){
    let video : Video;    
    video = this.updateFormVideo.value;
    video.id = this.id;
    
    if(this.catego[0].id) {
      video.categories[0].id = this.catego[0].id
    }

    if(this.videoImage) {
      video.image = this.videoImage.split('C:\\fakepath\\').pop();
    }   

    /**
     * @todo observer methods next and error 
     */
    this.videoService.updateVideo(video).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    )
  }  

}
