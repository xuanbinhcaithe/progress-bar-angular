import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-xuanbinh',
  templateUrl: './xuanbinh.component.html',
  styleUrls: ['./xuanbinh.component.css']
})
export class XuanbinhComponent implements OnInit {

  @Input()backgroundColor = '#d9d9d9';
  @Input()progressColor = '#4CAF50';
  @Input() width = 50;


  constructor() { }

  ngOnInit() {
  }

}
