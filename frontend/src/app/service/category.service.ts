import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class Category {
  static id: any;
  constructor(
    public id: string,
    public name: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoriesUrl: string;

  constructor(private httpClient: HttpClient) {
    this.categoriesUrl = 'http://localhost:8080/categories/get';
   }

   getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(this.categoriesUrl + '/id?id=' + `${id}`).pipe(
    map(category => category) // JSON
    );
  }

  public createCategory(category: any) {
    return this.httpClient.post<Category>(
      "http://localhost:8080/categories/post",
      category
    );
  }

  updateCategory(category: Category): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8080/categories/' + `update/${category.id}`, category);
  }

  public deleteCategory(category: any) {
    return this.httpClient.delete<Category>(
      "http://localhost:8080/categories/delete" + "/" + category.id
    );
  }
}
