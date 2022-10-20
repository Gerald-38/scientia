import { Component, Input, OnInit } from '@angular/core';
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
  message!: string;

  @Input() error: string | null | undefined;

  constructor(private categorySercive: CategoryService, private videoService: VideoService ,private router: Router) { }

  ngOnInit(): void {
  }
  
  // On appelle la méthode CreateCategory du service  et on lui passe l'objet cateogry modifié avec la directive ngModel
  createCategory(): void {
    this.categorySercive.createCategory(this.category).subscribe(data => {
      alert("La catégorie a bien été créée!");
      this.router.navigate([''])
      },
      error => {
        this.error = error.message;
        this.message = error.error.message; // L'erreur précise si le nom de la catégorie est déjà existant ou s'il comporte au moins 2 lettres
      });
  }
}
