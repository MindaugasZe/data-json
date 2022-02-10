import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {


  constructor(
    public dataService: DataService,
    public router: Router,
  ) { }

  totalLenght!: number;
  page: number = 1;
  items: any = [];


  ngOnInit(): void {
    this.loadTitle();
  }

  loadTitle() {
    this.dataService
      .get('/posts/')
      .subscribe((item: any) => (this.items = item));
    this.totalLenght = this.items.lenght;

  }

  displayDetail(item: any) {
    this.dataService.itemDetail = item;

  }

}
