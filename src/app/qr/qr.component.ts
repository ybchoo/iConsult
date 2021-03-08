import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;
  @Output() liked = new EventEmitter();

  constructor() { 
    console.log("InSide QR Component    [["+this.name);
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue; 
    if (!hero.isFirstChange()) {
      console.log(`Change ${oldValue} to ${newValue}`);
    }
  }

  ngOnDestroy(): void {
  }

}
