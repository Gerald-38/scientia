import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class Category {
  constructor(
    public id: string,
    public name: string,
    public videos: Array<String>,
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
}
