import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from '../service/category.service';
import { Video, VideoService } from '../service/video.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category("", "");
  videos: Video[] | any;

  constructor(private categorySercive: CategoryService, private videoService: VideoService ,private router: Router) { }

  ngOnInit(): void {


  }

  createCategory(): void {
    this.categorySercive.createCategory(this.category).subscribe(data => {
      alert("La catégorie a bien été créée!");
      this.router.navigate([''])
      });
  }


}
