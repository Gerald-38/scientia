import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from '../service/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  category: Category | undefined;
  updateFormCategory!: FormGroup;
  id!: string; 
  

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // id dans l'url
    if(idParam)
    this.id = idParam;
    this.initUpdateForm(); // initialisation du formulaire

    // mise à jour du formulaire après l'instanciation de ce dernier
    this.categoryService.getCategoryById(this.id).subscribe(category => {
      // on récupère l'instance du formulaire et on met à jour les champs du formulaire
      // avec la méthode patchValue du formGroup
      this.updateFormCategory.patchValue(category);  
    });
  }

  initUpdateForm() {

    this.updateFormCategory = this.fb.group(
      {        id : 0,
        name: new FormControl('', [
          Validators.required,
        ]),   
      }
    );

  }

  // getter pour la validation dans le formulaire errors
  get categoryname() { return this.updateFormCategory.get('categoryname'); }

  onSubmit(){
    let category : Category;
    category = this.updateFormCategory.value;
    category.id = this.id;

    /**
     * @todo observer methods next and error 
     */
    this.categoryService.updateCategory(category).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    )
  }
}
