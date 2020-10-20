import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b6tl',
  templateUrl: './b6tl.component.html',
  styleUrls: ['./b6tl.component.css']
})
export class B6tlComponent implements OnInit {

  constructor() { }
  public tongduong(n: number[]){
    let s = 0;
  for (let i = 0; i < n.length; i++){
  if (n[i] >= 0){
    s += n[i];
  } else continue;
  }return s;
  }
  tong = 0;
  // tslint:disable-next-line: semicolon
  dayso = [-19, -18, -17, -16, -15, -14, -13, -12, -11, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    ngOnInit(): void {
        this.tong = this.tongduong(this.dayso);
    }
}
