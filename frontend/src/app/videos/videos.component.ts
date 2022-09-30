import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, CategoryService } from '../service/category.service';
import { VideoService, Video } from '../service/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[] | any;
  categories: Category[] | any;
  displayedColumns: string[] = ["title"];
  choixCatego: boolean = false;
  choosenCategory!: string;

  constructor(private videoService: VideoService, private categoryService: CategoryService) { }

  onSelectByCategory(): void {
    this.choixCatego = true;
  }

  onReload() {
    window.location.reload()
  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(data => {
      this.videos = data
      // this.videos = console.log(data)     
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      // this.categories = console.log(data)     
    });
  } 
}
