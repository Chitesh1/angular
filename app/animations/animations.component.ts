import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger('myanimation',[
         state('smaller',style({
            transform : 'translateY(100px)'
         })),
         state('larger',style({
           transform : 'translateX(-100px)'
         })),
         state('scale',style({
           transform:'scale(3,3)',
         })),
         transition('smaller <=> scale',animate('900ms ease-in'))
    ])
    ]
})
export class AnimationsComponent implements OnInit {

  state:string = "smaller";
  animate(){
      this.state = this.state == 'larger'?'smaller':'larger';
  }
  scale(){
     this.state =this.state == 'larger'?'scale':'scale';
  }
  constructor() { }

  ngOnInit() {
  }

}
