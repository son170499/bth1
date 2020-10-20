import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b3tl',
  templateUrl: './b3tl.component.html',
  styleUrls: ['./b3tl.component.css']
})
export class B3tlComponent implements OnInit {

  constructor() { }
  s = [{hoten:'Nguyen Van An',dthi:9.5},
  {hoten:'Hoang Vu Viet',dthi:10.5},
  {hoten:'Dinh Duy Anh',dthi:5.5}
  ];

  ngOnInit(): void {
  }

  Sort(){
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    this.s.sort((a,b)=> {
    if(catten(a.hoten)>catten(b.hoten)) return 1;
    else if(catten(a.hoten)<catten(b.hoten)) return -1;
    return 0;
    })
  }
}
