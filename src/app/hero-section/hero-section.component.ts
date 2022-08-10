import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations:[

    trigger('fade',[

      transition('void=> *',[

        style({backgroundColor:'white',opacity:0}),

        animate(2000,style({backgroundColor:'white',opacity:1}))

      ])

    ])

  ]

})
export class HeroSectionComponent implements OnInit {
  
  @Output('ChangeIncome')
  changeIncome: EventEmitter<string> = new EventEmitter<string>();
  
  @Output('buyingType')
  buyingType:EventEmitter<string> = new EventEmitter<string>();
 
  @Output('manufacturer')
  manufacturer:EventEmitter<string> = new EventEmitter<string>();


  header:string = "Buyer Demographics by Product";

  public getScreenWidth:any;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  
  income:string[] = ["Household Income", "Industry Income"];
  selectedIncome:string = this.income[0];

  // this.changeIncome.emit(this.selectedIncome);

  purchasedItems:string[] = ["Buying Households", "Buying Appliances"];
  selectedPurchased:string = this.purchasedItems[0];

  Manufacturers:string[] = ["4 PG manufacturer", "2 PG manufacturer"];
  selectedManufacturer:string = this.Manufacturers[0];

  


  constructor() { }

  ngOnInit(): void {
    this.onWindowResize()
  }

  onChange() {
    this.changeIncome.emit(this.selectedIncome);
    this.buyingType.emit(this.selectedPurchased);
    this.manufacturer.emit(this.selectedManufacturer);
  }

}
