import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {
public personas=[
  'manuela', 'ruben','mileidy','kevin' ]
  constructor() { }

  ngOnInit(): void {
  }

}
